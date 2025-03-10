
import React, { createContext, useContext, useState, useEffect } from "react";
import { Task } from "../types";

type TaskContextType = {
  
  tasks: Task[];
  addTask: (task: Task) => void;
  editTask: (id: string, updatedTask: Task) => void;
  deleteTask: (id: string) => void;
  filterPriority: string;
  setFilterPriority: (priority: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setTasks: (tasks: Task[]) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterPriority, setFilterPriority] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => setTasks([...tasks, task]);
  const editTask = (id: string, updatedTask: Task) =>
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
  const deleteTask = (id: string) =>
    setTasks(tasks.filter(task => task.id !== id));

  return (
    <TaskContext.Provider
      value={{tasks, addTask, editTask, deleteTask, filterPriority, setFilterPriority, searchQuery, setSearchQuery, setTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTaskContext must be used within TaskProvider");
  return context;
};

