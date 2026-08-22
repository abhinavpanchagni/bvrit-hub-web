import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';

async function test() {
  try {
    const result = await streamText({
      model: groq('llama-3.3-70b-versatile'),
      prompt: 'hi'
    });
    console.log(typeof result.toDataStreamResponse);
  } catch(e) {
    console.error(e);
  }
}
test();
