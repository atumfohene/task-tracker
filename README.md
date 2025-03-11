    Task Tracker App

A minimalistic task management application built using React, TypeScript, and Context API , featuring  priority filtering, search functionality, localStorage persistence, and drag-and-drop task reordering .

---

   Features

  Add, Edit, Delete Tasks   
  Filter Tasks by Priority (Low, Medium, High)   
 Search Tasks by Title or Description   
 Drag-and-Drop Task Reordering  (Powered by `@dnd-kit`)  
 Data Persistence via localStorage   
  Unit Tests for Task Components and Filters 


Tech Stack 
-  React  (with Hooks)
-  TypeScript 
-  Context API  (Global State Management)
-  Dnd-Kit  (for Drag-and-Drop)
-  LocalStorage  (for data persistence)
-  Jest & React Testing Library  (for unit tests)

---

Project Structure 
/task-tracker
│── /src
│ ├── /components
│ │ ├── AddTaskForm.tsx
│ │ ├── TaskItem.tsx
│ │ ├── TaskList.tsx
│ │ ├── Filter.tsx
│ │ ├── Search.tsx
│ ├── /context
│ │ ├── TaskContext.tsx
│ ├── /hooks
│ │ ├── useLocalStorage.ts
│ ├── /tests
│ │ ├── TaskList.test.tsx
│ │ ├── Filter.test.tsx
│ ├── /styles
│ │ ├── App.css
│ ├── App.tsx
│ ├── index.tsx
│ ├── types.ts
│── package.json
│── tsconfig.json
│── README.md

---

Installation & Running Locally 
Clone the Repository   
```sh
git clone https://github.com/yourusername/task-tracker.git
cd task-tracker
 State Management Approach
Used Context API to manage tasks and filters globally.
Stored tasks in localStorage to maintain data between sessions.
Implemented Drag-and-Drop with @dnd-kit to allow task reordering.

