
import React from "react";
import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { TaskProvider } from "../context/TaskContext";

test("renders task list without crashing", () => {
  render(
    <TaskProvider>
      <TaskList />
    </TaskProvider>
  );
  expect(screen.getByText(/No tasks available/i)).toBeInTheDocument();
});
