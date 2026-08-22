"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Circle, Plus, Trash2, ListTodo, ArrowUpRight, ArrowDownRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [mounted, setMounted] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false);

  // Load from local storage
  useEffect(() => {
    setMounted(true);
    const savedTodos = localStorage.getItem("bvrithub_todos");
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (e) {
        console.error("Failed to parse todos from local storage");
      }
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("bvrithub_todos", JSON.stringify(todos));
    }
  }, [todos, mounted]);

  const addTodo = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: inputValue.trim(),
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue("");
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  if (!mounted) {
    return (
      <div className="bg-surface-yellow rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-6 border border-border/10 shadow-sm opacity-50 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-white/60 flex items-center justify-center text-accent-black shadow-sm">
            <ListTodo size={20} className="sm:w-6 sm:h-6" strokeWidth={2.5} />
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary">Note your tasks</h2>
        </div>
      </div>
    );
  }

  const completedCount = todos.filter(t => t.completed).length;

  return (
    <motion.div 
      layout
      initial={{ borderRadius: 40 }}
      transition={springTransition}
      className={`bg-surface-yellow border border-border/10 shadow-sm flex flex-col overflow-hidden origin-top relative ${
        isExpanded 
          ? 'min-h-[400px] p-5 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem]' 
          : 'p-5 sm:p-6 rounded-[2rem] sm:rounded-[2.5rem] cursor-pointer hover:-translate-y-1 hover:shadow-md transition-all'
      }`}
      onClick={() => {
        if (!isExpanded) setIsExpanded(true);
      }}
    >
      <AnimatePresence mode="popLayout">
        {!isExpanded ? (
          <motion.div 
            key="collapsed"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={springTransition}
            className="flex items-center justify-between group"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <motion.div layout="position" className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-white/60 flex items-center justify-center text-accent-black shadow-sm group-hover:scale-105 transition-transform">
                <ListTodo size={20} className="sm:w-6 sm:h-6" strokeWidth={2.5} />
              </motion.div>
              <motion.div layout="position">
                <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary">Note your tasks</h2>
                <p className="text-text-secondary font-medium text-xs sm:text-sm mt-0.5">
                  {todos.length} total • {completedCount} completed
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              layout="position"
              className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center border border-white/40 text-accent-black transform group-hover:rotate-45 group-hover:bg-white/60 transition-all duration-300 shadow-sm"
            >
              <ArrowUpRight size={20} />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="expanded"
            layout 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={springTransition}
            className="flex flex-col h-full"
          >
            <div className="flex items-center justify-between mb-6 sm:mb-8 group">
              <div className="flex items-center gap-3 sm:gap-4">
                <motion.div layout="position" className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-white/60 flex items-center justify-center text-accent-black shadow-sm">
                  <ListTodo size={20} className="sm:w-6 sm:h-6" strokeWidth={2.5} />
                </motion.div>
                <motion.div layout="position">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-text-primary">Tasks</h2>
                  <p className="text-text-secondary font-medium text-xs sm:text-sm mt-0.5">
                    {todos.length} total • {completedCount} completed
                  </p>
                </motion.div>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
                className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-white/40 hover:bg-white/60 flex items-center justify-center border border-white/40 text-accent-black transition-all shadow-sm hover:scale-105 group-hover:rotate-90 duration-300"
                aria-label="Close"
              >
                <X size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>

            <form onSubmit={addTodo} className="flex gap-2 sm:gap-3 mb-4 sm:mb-6">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="What needs to be done?"
                className="flex-grow w-full min-w-0 bg-white/60 border border-white/20 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-text-primary text-sm sm:text-base placeholder:text-text-secondary/70 font-medium focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all shadow-sm"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                onClick={(e) => e.stopPropagation()}
                className="bg-accent-black shrink-0 text-white p-2 sm:p-3 rounded-xl hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 shadow-sm flex items-center justify-center"
              >
                <Plus size={20} className="sm:w-6 sm:h-6" strokeWidth={2.5} />
              </button>
            </form>

            <div 
              className="flex-grow overflow-y-auto pr-2 custom-scrollbar space-y-3 max-h-[300px]"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence>
                {todos.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-text-secondary font-medium py-10"
                  >
                    No tasks yet. Add one above!
                  </motion.div>
                ) : (
                  todos.map((todo) => (
                    <motion.div
                      key={todo.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className={`group flex items-center justify-between p-4 rounded-xl border transition-all ${
                        todo.completed 
                          ? "bg-white/40 border-white/20 text-text-secondary" 
                          : "bg-white/80 border-white/40 text-text-primary shadow-sm hover:shadow-md"
                      }`}
                    >
                      <div 
                        className="flex items-center gap-2 sm:gap-3 cursor-pointer flex-grow overflow-hidden"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleTodo(todo.id);
                        }}
                      >
                        <button className="text-accent-black/70 hover:text-accent-black shrink-0 transition-colors">
                          {todo.completed ? (
                            <CheckCircle2 size={18} className="sm:w-5 sm:h-[22px] text-accent-blue" />
                          ) : (
                            <Circle size={18} className="sm:w-5 sm:h-[22px]" />
                          )}
                        </button>
                        <span className={`font-medium text-sm sm:text-base truncate ${todo.completed ? "line-through opacity-70" : ""}`}>
                          {todo.text}
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteTodo(todo.id);
                        }}
                        className="text-red-500/0 group-hover:text-red-500/70 hover:!text-red-500 p-2 -mr-2 rounded-lg transition-all"
                        aria-label="Delete task"
                      >
                        <Trash2 size={18} />
                      </button>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
