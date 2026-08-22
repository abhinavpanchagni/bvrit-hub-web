"use client";

import { useState } from "react";
import { Plus, Check } from "lucide-react";
import { addTask, CreateTaskInput } from "@/lib/actions/tasks";

interface AddTaskButtonProps {
  task: CreateTaskInput;
  className?: string;
  variant?: "outline" | "solid";
}

export default function AddTaskButton({ task, className = "", variant = "outline" }: AddTaskButtonProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "added">("idle");

  const handleAddTask = async () => {
    if (status === "added" || status === "loading") return;
    
    setStatus("loading");
    
    try {
      const res = await addTask(task);
      
      if (res?.success) {
        setStatus("added");
      } else {
        setStatus("idle");
      }
    } catch (e) {
      setStatus("idle");
    }
  };

  const baseStyles = "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-sm active:scale-95";
  const variants = {
    outline: "bg-white/60 border border-border/10 text-text-primary hover:bg-white/80 hover:-translate-y-0.5",
    solid: "bg-accent-black text-bg hover:-translate-y-0.5"
  };

  const currentVariant = variants[variant] || variants.outline;

  return (
    <button
      onClick={handleAddTask}
      disabled={status === "loading" || status === "added"}
      className={`${baseStyles} ${currentVariant} ${className} disabled:opacity-80 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:active:scale-100`}
    >
      {status === "idle" && (
        <>
          <Plus size={16} />
          <span>Add to My Tasks</span>
        </>
      )}
      {status === "loading" && (
        <>
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span>Adding...</span>
        </>
      )}
      {status === "added" && (
        <>
          <Check size={16} className="text-green-500" />
          <span>Added to My Tasks</span>
        </>
      )}
    </button>
  );
}
