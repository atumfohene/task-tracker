
import React from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

import Search from "./components/Search";
import { TaskProvider } from "./context/TaskContext";
import "./styles/AppNew.css";

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div className="app-container" style={{}}>
        {/* App Header */}
        <h1>Task Tracker</h1>

        {/* Task Management Controls */}
        <div className="task-controls">
          <Search />
       
        </div>

        {/* Task Creation Form */}
        <AddTaskForm />

        {/* Task List Display */}
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
