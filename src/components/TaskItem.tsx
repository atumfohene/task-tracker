import React, { useState } from "react";
import { Task } from "../types";
import { useTaskContext } from "../context/TaskContext";
import "../styles/AppNew.css";




interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { editTask, deleteTask } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);




  const handleSave = () => {
    editTask(task.id, { ...task, title: updatedTitle, description: updatedDescription });
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <>
          <input value={updatedTitle} 
          className="edit-title"
           onPointerDown={(e) => e.stopPropagation()}
          onChange={e => setUpdatedTitle(e.target.value)} />
          
          <textarea  
        className="edit-description" 
          value={updatedDescription} 
           onPointerDown={(e) => e.stopPropagation()}
          onChange={e => setUpdatedDescription(e.target.value)} />

          <button 
          className="btn-save"
     onPointerDown={(e) => e.stopPropagation()}
          onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
        <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
          
          <div>
            <h3 className="btn-title">{task.title}</h3>
            <p className="btn-description">{task.description}</p>
          </div>
         
<div style={{flexDirection:"row"}}>

<button 
          className="btn-edit"
          onClick={() => setIsEditing(true)}
         onPointerDown={(e) => e.stopPropagation()}
             >Edit</button>
          <button
          className="btn-delete"
           onClick={() => deleteTask(task.id)}
           onPointerDown={(e) => e.stopPropagation()}
           >Delete</button>

</div>


        </>
      )}
    </div>
  );
};

export default TaskItem;