import fs from 'fs';
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

const env = fs.readFileSync('.env.local', 'utf-8');
const apiKey = env.match(/NVIDIA_API_KEY=(.+)/)[1].trim();
const dataset = JSON.parse(fs.readFileSync('lib/quiz-dataset.json', 'utf-8'));

const nvidia = createOpenAI({ baseURL: 'https://integrate.api.nvidia.com/v1', apiKey });
let matchedContext = '';
const keywords = ['vocabulary'];
for (const [key, content] of Object.entries(dataset)) {
  if (keywords.some((k) => key.toLowerCase().includes(k))) {
    matchedContext += `\n\n--- Source Material (${key}) ---\n${JSON.stringify(content, null, 2)}`;
  }
}

console.log("Matched Context Length:", matchedContext.length);

generateText({
  model: nvidia.chat('meta/llama-3.1-8b-instruct'),
  prompt: `Generate 5 multiple-choice questions about the topic "vocabulary".
  
  Requirements:
  - Output exactly 5 questions.
  - YOU MUST REPLY ONLY IN VALID JSON FORMAT EXACTLY LIKE THIS STRUCTURE WITH NO OTHER TEXT:
  {
    "questions": [
      { "id": 1, "question": "...", "options": ["...", "...", "...", "..."], "correctOptionIndex": 0, "explanation": "..." }
    ]
  }
  
  REFERENCE CONTEXT:
  ${matchedContext}`
}).then(res => {
  console.log('RESPONSE TEXT:');
  console.log(res.text);
  try {
    const parsed = JSON.parse(res.text.replace(/```json/gi, '').replace(/```/gi, '').trim());
    console.log('PARSED SUCCESSFULLY:', Object.keys(parsed));
  } catch(e) {
    console.error('PARSE ERROR', e);
  }
}).catch(console.error);
