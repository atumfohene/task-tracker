import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import { Task } from "../types";
import { v4 as uuidv4 } from "uuid";
import Filter from "./Filter";
import "../styles/App.css";


const AddTaskForm: React.FC = () => {
  const { addTask } = useTaskContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Medium");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") return;

    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      priority,
    };

    addTask(newTask);
    setTitle("");
    setDescription("");
    setPriority("Medium");
  };

  return (
    <div style={{flexDirection:"row", backgroundColor:""}}> 
     
          <form style={{backgroundColor: "rgba(255, 255, 255, 0.2)"}} onSubmit={handleSubmit} className="task-form">
          <Filter />
          <input type="text" 
           className="taskTitle"
          placeholder="Task Title" value={title} onChange={e => setTitle(e.target.value)} required />
          <textarea 
          className="taskDescription"
          placeholder="Task Description" value={description} onChange={e => setDescription(e.target.value)} required />
          <select value={priority} onChange={e => setPriority(e.target.value as "Low" | "Medium" | "High")}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button type="submit">Add Task</button>
        </form>

       </div>

  );
};

export default AddTaskForm;