"use client";

import { useState, useOptimistic, useTransition } from "react";
import { CheckCircle2, Circle, ArrowUpRight, ArrowRight, ListTodo, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toggleTaskCompletion } from "@/lib/actions/tasks";
import Link from "next/link";

export interface Task {
  id: string;
  title: string;
  type: string;
  source_type: string | null;
  source_name: string | null;
  source_url: string | null;
  due_date: string | null;
  completed: boolean;
}

interface MyTasksWidgetProps {
  initialTasks: Task[];
}

export default function MyTasksWidget({ initialTasks }: MyTasksWidgetProps) {
  const [tasks, setTasks] = useState(initialTasks);
  const [isPending, startTransition] = useTransition();

  const handleToggle = async (taskId: string, currentStatus: boolean) => {
    // Optimistic UI update
    setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: !currentStatus } : t));
    
    // Background Server Action
    startTransition(async () => {
      const res = await toggleTaskCompletion(taskId, !currentStatus);
      if (!res.success) {
        // Revert on failure
        setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: currentStatus } : t));
      }
    });
  };

  const incompleteTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);
  
  // Show max 4 tasks on dashboard (prioritize incomplete)
  const displayTasks = [
    ...incompleteTasks,
    ...completedTasks
  ].slice(0, 4);

  return (
    <div className="bg-surface-yellow border border-border/10 shadow-sm flex flex-col overflow-hidden p-5 sm:p-6 rounded-[2rem] sm:rounded-[2.5rem] transition-all h-full min-h-[300px] relative group">
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 shrink-0 rounded-xl bg-white/60 flex items-center justify-center text-accent-black shadow-sm">
            <ListTodo size={20} strokeWidth={2.5} />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-text-primary">
              {incompleteTasks.length === 0 ? "My Tasks" : `My Tasks — ${incompleteTasks.length} remaining`}
            </h2>
          </div>
        </div>
        
        <Link 
          href="/tasks"
          className="text-text-secondary hover:text-text-primary text-sm font-bold flex items-center gap-1 transition-colors"
        >
          View All <ArrowRight size={16} />
        </Link>
      </div>

      <div className="flex-grow flex flex-col gap-3">
        {displayTasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center py-8">
            <p className="text-text-secondary font-medium mb-4">Nothing here yet.<br/>When you find something useful, add it to your tasks.</p>
            <Link href="/toolkit" className="bg-white/60 px-4 py-2 rounded-xl text-sm font-bold border border-white/20 shadow-sm">
              Explore BVRIT Hub
            </Link>
          </div>
        ) : (
          displayTasks.map(todo => (
            <div
              key={todo.id}
              className={`flex items-center justify-between p-3 sm:p-4 rounded-xl border transition-all ${
                todo.completed 
                  ? "bg-white/40 border-white/20 text-text-secondary" 
                  : "bg-white/80 border-white/40 text-text-primary shadow-sm hover:shadow-md"
              }`}
            >
              <div 
                className="flex items-center gap-3 cursor-pointer flex-grow overflow-hidden"
                onClick={() => handleToggle(todo.id, todo.completed)}
              >
                <button className="text-accent-black/70 hover:text-accent-black shrink-0 transition-colors">
                  {todo.completed ? (
                    <CheckCircle2 size={20} className="text-green-500" />
                  ) : (
                    <Circle size={20} />
                  )}
                </button>
                <div className="flex flex-col min-w-0">
                  <span className={`font-medium text-sm sm:text-base truncate ${todo.completed ? "line-through opacity-70" : ""}`}>
                    {todo.title}
                  </span>
                  {!todo.completed && todo.source_name && (
                    <span className="text-xs text-text-secondary font-medium truncate mt-0.5">
                      {todo.source_name}
                    </span>
                  )}
                </div>
              </div>
              
              {!todo.completed && todo.source_url && (
                <Link
                  href={todo.source_url}
                  className="shrink-0 ml-2 bg-black/5 hover:bg-black/10 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors"
                >
                  Open <ArrowUpRight size={14} />
                </Link>
              )}
            </div>
          ))
        )}
      </div>
      
      {tasks.length > 0 && incompleteTasks.length === 0 && (
        <div className="mt-4 text-center">
          <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">
            🎉 All caught up!
          </span>
        </div>
      )}
    </div>
  );
}
