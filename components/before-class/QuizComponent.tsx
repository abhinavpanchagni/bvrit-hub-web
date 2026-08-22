"use client";

import { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation?: string;
}

interface QuizComponentProps {
  title?: string;
  description?: string;
  questions: QuizQuestion[];
  subjectName?: string;
}

export default function QuizComponent({ 
  title = "Quick Quiz", 
  description = "Test your understanding with multiple-choice questions before moving to the next prerequisite.",
  questions,
  subjectName
}: QuizComponentProps) {
  const [currentQuestions, setCurrentQuestions] = useState<QuizQuestion[]>([]);
  const [isStarted, setIsStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleStart = () => {
    // Shuffle the questions order
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    
    // Shuffle the options within each question and track the new correct index
    const processedQuestions = shuffledQuestions.map(q => {
      const correctOptionText = q.options[q.correctOptionIndex];
      const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
      const newCorrectIndex = shuffledOptions.indexOf(correctOptionText);
      
      return {
        ...q,
        options: shuffledOptions,
        correctOptionIndex: newCorrectIndex
      };
    });

    setCurrentQuestions(processedQuestions);
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsStarted(true);
  };

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQuestions[currentIndex].correctOptionIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  if (!isStarted) {
    return (
      <section className="bg-accent-black text-bg rounded-[2.5rem] p-8 md:p-12 shadow-sm text-center my-12">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
          <HelpCircle size={32} />
        </div>
        <h2 className="text-3xl font-black mb-4">{title}</h2>
        <p className="text-xl font-medium text-bg/80 mb-8 max-w-xl mx-auto">
          {description}
        </p>
        <button 
          onClick={handleStart}
          className="bg-surface-yellow text-accent-black font-black text-lg px-8 py-4 rounded-2xl hover:scale-105 transition-transform shadow-[4px_4px_0_#000]"
        >
          Start Quiz →
        </button>
      </section>
    );
  }

  if (isFinished) {
    return (
      <section className="bg-accent-black text-bg rounded-[2.5rem] p-8 md:p-12 shadow-sm text-center my-12">
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
          {score === currentQuestions.length ? <CheckCircle2 size={40} className="text-surface-mint" /> : <RefreshCw size={40} className="text-surface-yellow" />}
        </div>
        <h2 className="text-3xl font-black mb-4">Quiz Completed!</h2>
        <p className="text-2xl font-bold mb-2">
          You scored <span className={score >= currentQuestions.length / 2 ? "text-surface-mint" : "text-surface-peach"}>{score}</span> out of {currentQuestions.length}
        </p>
        <p className="text-lg font-medium text-bg/80 mb-8 max-w-xl mx-auto">
          {score === currentQuestions.length 
            ? "Perfect score! You have a solid grasp of this prerequisite." 
            : "Good effort! Review the concepts you missed to strengthen your foundation."}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button 
            onClick={handleStart}
            className="bg-white text-accent-black font-black text-lg px-8 py-4 rounded-2xl hover:scale-105 transition-transform shadow-[4px_4px_0_#000]"
          >
            Retake Quiz ↻
          </button>
        </div>
      </section>
    );
  }

  const currentQuestion = currentQuestions[currentIndex];

  return (
    <section className="bg-white border border-border/10 rounded-[2.5rem] p-8 md:p-12 shadow-sm my-12">
      <div className="flex items-center justify-between mb-8">
        <span className="font-bold text-text-secondary">
          Question {currentIndex + 1} of {currentQuestions.length}
        </span>
        <span className="font-bold text-accent-black bg-surface-lavender px-3 py-1 rounded-full text-sm">
          Score: {score}
        </span>
      </div>

      <h3 className="text-2xl font-black text-text-primary mb-8 leading-tight">
        {currentQuestion.question}
      </h3>

      <div className="space-y-4 mb-8">
        {currentQuestion.options.map((option, idx) => {
          let optionStyle = "border-border/20 bg-bg hover:border-border/50";
          
          if (isAnswered) {
            if (idx === currentQuestion.correctOptionIndex) {
              optionStyle = "border-green-500 bg-green-50 text-green-700 shadow-sm";
            } else if (idx === selectedOption) {
              optionStyle = "border-red-500 bg-red-50 text-red-700 shadow-sm";
            } else {
              optionStyle = "border-border/10 bg-bg/50 opacity-60";
            }
          }

          return (
            <button
              key={idx}
              disabled={isAnswered}
              onClick={() => handleOptionClick(idx)}
              className={`w-full text-left p-5 rounded-2xl border-2 font-bold transition-all flex items-center justify-between ${optionStyle}`}
            >
              <span>{option}</span>
              {isAnswered && idx === currentQuestion.correctOptionIndex && <CheckCircle2 size={24} className="text-green-500 shrink-0" />}
              {isAnswered && idx === selectedOption && idx !== currentQuestion.correctOptionIndex && <XCircle size={24} className="text-red-500 shrink-0" />}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="overflow-hidden"
          >
            {currentQuestion.explanation && (
              <div className="mb-8 p-6 rounded-2xl bg-surface-peach/30 border border-surface-peach/50 text-text-primary font-medium">
                <span className="font-bold block mb-1">Explanation:</span>
                {currentQuestion.explanation}
              </div>
            )}
            
            <button
              onClick={handleNext}
              className="w-full bg-accent-black text-white font-black text-lg px-8 py-4 rounded-2xl hover:bg-black/80 transition-colors"
            >
              {currentIndex < currentQuestions.length - 1 ? "Next Question →" : "See Results →"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
