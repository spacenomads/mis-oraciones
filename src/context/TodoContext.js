import { createContext, useState, useEffect } from "react";
const DEFAULT_TASKS = []; 

const TodoContext = createContext();

function TodoContextProvider({children}) {
  const [tasks, saveTasks] = useState(JSON.parse(localStorage.getItem('oraciones')) || DEFAULT_TASKS);
  return (
    <TodoContext.Provider value={{tasks, saveTasks}}>
      {children}
    </TodoContext.Provider>
  );
}

export {
  TodoContext,
  TodoContextProvider
};