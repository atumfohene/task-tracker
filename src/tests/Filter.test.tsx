
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";
import { TaskProvider } from "../context/TaskContext";

test("updates filter when selected", () => {
  render(
    <TaskProvider>
      <Filter />
    </TaskProvider>
  );

  const selectElement = screen.getByRole("combobox");
  fireEvent.change(selectElement, { target: { value: "High" } });

  expect(selectElement).toHaveValue("High");
});
