"use client";

import { useState, useTransition } from "react";
import { CheckCircle2, Circle, ArrowUpRight, Trash2, Plus, ListTodo } from "lucide-react";
import { toggleTaskCompletion, deleteTask, addTask } from "@/lib/actions/tasks";
import { Task } from "@/components/dashboard/MyTasksWidget";
import Link from "next/link";

interface TasksViewProps {
  initialTasks: Task[];
}

export default function TasksView({ initialTasks }: TasksViewProps) {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState<"All" | "BVRIT_HUB" | "PERSONAL">("All");
  const [isPending, startTransition] = useTransition();

  // Personal Task Modal State
  const [showModal, setShowModal] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDue, setNewTaskDue] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const filteredTasks = tasks.filter((t) => {
    if (filter === "All") return true;
    return t.type === filter;
  });

  const handleToggle = async (taskId: string, currentStatus: boolean) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: !currentStatus } : t));
    startTransition(async () => {
      const res = await toggleTaskCompletion(taskId, !currentStatus);
      if (!res.success) {
        setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: currentStatus } : t));
      }
    });
  };

  const handleDelete = async (taskId: string) => {
    const previousTasks = [...tasks];
    setTasks(tasks.filter(t => t.id !== taskId));
    startTransition(async () => {
      const res = await deleteTask(taskId);
      if (!res.success) {
        setTasks(previousTasks);
      }
    });
  };

  const handleAddPersonalTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    
    setIsAdding(true);
    
    // We cannot fully do optimistic UI for creation because we don't know the new ID
    // So we'll just wait for the server action.
    const res = await addTask({
      title: newTaskTitle,
      type: "PERSONAL",
      dueDate: newTaskDue || undefined
    });
    
    if (res?.success) {
      setShowModal(false);
      setNewTaskTitle("");
      setNewTaskDue("");
      // Real app would refetch here. Since this component receives initialTasks,
      // the server action's revalidatePath("/tasks") will trigger a page reload, 
      // updating `initialTasks`. However, since we are managing state locally, 
      // we might need to rely on the server component re-rendering this.
      // To ensure UI updates smoothly without full reload breaking local state:
      window.location.reload(); 
    }
    setIsAdding(false);
  };

  const incompleteCount = tasks.filter(t => !t.completed).length;

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-surface-yellow flex items-center justify-center text-accent-black shadow-sm">
            <ListTodo size={24} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-text-primary">My Tasks</h1>
            <p className="text-text-secondary font-medium mt-1">
              {incompleteCount === 0 ? "You're all caught up! 🎉" : `${incompleteCount} remaining`}
            </p>
          </div>
        </div>
        
        <button
          onClick={() => setShowModal(true)}
          className="bg-accent-black text-bg px-5 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-md transition-all active:scale-95"
        >
          <Plus size={18} /> Add Personal Task
        </button>
      </div>

      <div className="flex gap-2 mb-8 bg-black/5 p-1 rounded-2xl w-fit">
        {(["All", "BVRIT_HUB", "PERSONAL"] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              filter === f ? "bg-white text-text-primary shadow-sm" : "text-text-secondary hover:text-text-primary"
            }`}
          >
            {f === "All" ? "All Tasks" : f === "BVRIT_HUB" ? "BVRIT Hub" : "Personal"}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-16 bg-white/50 border border-border/10 rounded-3xl">
            <p className="text-text-secondary font-medium text-lg">No tasks found.</p>
          </div>
        ) : (
          filteredTasks.map(todo => (
            <div
              key={todo.id}
              className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all group ${
                todo.completed 
                  ? "bg-white/40 border-white/20 text-text-secondary" 
                  : "bg-white/80 border-white/40 text-text-primary shadow-sm hover:shadow-md"
              }`}
            >
              <div 
                className="flex items-start sm:items-center gap-4 cursor-pointer flex-grow overflow-hidden"
                onClick={() => handleToggle(todo.id, todo.completed)}
              >
                <button className="text-accent-black/70 hover:text-accent-black shrink-0 transition-colors mt-0.5 sm:mt-0">
                  {todo.completed ? (
                    <CheckCircle2 size={24} className="text-green-500" />
                  ) : (
                    <Circle size={24} />
                  )}
                </button>
                <div className="flex flex-col min-w-0 flex-grow">
                  <span className={`font-bold text-base sm:text-lg truncate ${todo.completed ? "line-through opacity-70" : ""}`}>
                    {todo.title}
                  </span>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    {todo.type === "BVRIT_HUB" && todo.source_name ? (
                      <span className="text-xs text-text-secondary font-bold bg-black/5 px-2 py-1 rounded-md">
                        {todo.source_name}
                      </span>
                    ) : (
                      <span className="text-xs text-text-secondary font-bold bg-black/5 px-2 py-1 rounded-md">
                        Personal
                      </span>
                    )}
                    {todo.due_date && (
                      <span className="text-xs text-accent-blue font-bold bg-accent-blue/10 px-2 py-1 rounded-md">
                        Due: {new Date(todo.due_date).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mt-4 sm:mt-0 pl-10 sm:pl-0 shrink-0">
                {!todo.completed && todo.type === "BVRIT_HUB" && todo.source_url && (
                  <Link
                    href={todo.source_url}
                    className="bg-black/5 hover:bg-black/10 text-text-primary text-sm font-bold px-4 py-2 rounded-xl flex items-center gap-1 transition-colors"
                  >
                    Open <ArrowUpRight size={16} />
                  </Link>
                )}
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if(confirm("Delete this task?")) handleDelete(todo.id);
                  }}
                  className="p-2 text-red-500/50 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                  aria-label="Delete task"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Personal Task Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-bg w-full max-w-md rounded-[2rem] border border-border/10 p-6 sm:p-8 shadow-xl animate-in fade-in zoom-in-95 duration-200">
            <h2 className="text-2xl font-extrabold text-text-primary mb-6">Add Personal Task</h2>
            <form onSubmit={handleAddPersonalTask} className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-bold text-text-primary mb-2 block">Task Name</label>
                <input
                  type="text"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  placeholder="E.g. Complete PPS assignment"
                  className="w-full rounded-2xl border border-border/10 bg-white/50 p-4 font-medium text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all shadow-sm"
                  autoFocus
                />
              </div>
              <div>
                <label className="text-sm font-bold text-text-primary mb-2 block">Due Date (Optional)</label>
                <input
                  type="date"
                  value={newTaskDue}
                  onChange={(e) => setNewTaskDue(e.target.value)}
                  className="w-full rounded-2xl border border-border/10 bg-white/50 p-4 font-medium text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all shadow-sm"
                />
              </div>
              <div className="flex items-center justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-3 rounded-xl font-bold text-text-secondary hover:bg-black/5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!newTaskTitle.trim() || isAdding}
                  className="bg-accent-black text-bg px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-md transition-all active:scale-95 disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  {isAdding ? "Adding..." : "Add Task"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
