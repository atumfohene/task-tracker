import React from "react";
import { useTaskContext } from "../context/TaskContext";
import "../styles/App.css";

const Search: React.FC = () => {
  const { searchQuery, setSearchQuery } = useTaskContext();

  return (
    <div className="searchContainer">

      <input className="input-dark" type="text" placeholder="Search tasks..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
    </div>
     );
};

export default Search;