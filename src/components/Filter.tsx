import React from "react";
import { useTaskContext } from "../context/TaskContext";
import "../styles/AppNew.css";

const Filter: React.FC = () => {
  const { filterPriority, setFilterPriority } = useTaskContext();

  return (
    <select value={filterPriority} onChange={e => setFilterPriority(e.target.value)}>
      <option
       className="btn-All"
       value="All">All</option>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>
  );
};

export default Filter;