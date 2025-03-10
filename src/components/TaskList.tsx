





import React from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TaskItem from "./TaskItem";
import { useTaskContext } from "../context/TaskContext";
import "../styles/AppNew.css";

const TaskList: React.FC = () => {
  const { tasks, setTasks, filterPriority, searchQuery } = useTaskContext();

  // Filter tasks based on priority selection and search query
  const filteredTasks = tasks.filter((task) =>
    (filterPriority === "All" || task.priority === filterPriority) &&
    (searchQuery === "" ||
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Function to handle drag-and-drop reordering
  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = tasks.findIndex((task) => task.id === active.id);
    const newIndex = tasks.findIndex((task) => task.id === over.id);

    setTasks(arrayMove(tasks, oldIndex, newIndex));
  };

  return (
//  Add the DND  here
<DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
<SortableContext items={filteredTasks} strategy={verticalListSortingStrategy}>

  <div className="task-list">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => 
          <SortableTaskItem key={task.id} task={task} />)
          ) 
          : (
            <p>No tasks available</p>
          )}
        </div>
</SortableContext>
</DndContext>

// And Here



  );
};

// Component to make tasks sortable
const SortableTaskItem: React.FC<{ task: any }> = ({ task }) => {
 
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style}  {...attributes} {...listeners}>
      <TaskItem key={task.id} task={task} />
    </div>
  );
};

export default TaskList;

 