import { createContext, useState, useEffect } from "react";
const DEFAULT_TASKS = []; 

const TasksContext = createContext();

function TasksContextProvider({children}) {
  const [tasks, saveTasks] = useState(JSON.parse(localStorage.getItem('oraciones')) || DEFAULT_TASKS);
  return (
    <TasksContext.Provider value={{tasks, saveTasks}}>
      {children}
    </TasksContext.Provider>
  );
}

export {
  TasksContext,
  TasksContextProvider
};