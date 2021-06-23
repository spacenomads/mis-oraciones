import { createContext, useState } from "react";
const DEFAULT_TASKS = []; 

const TasksContext = createContext();

function TasksContextProvider({children}) {
  const [list, saveList] = useState(JSON.parse(localStorage.getItem('oraciones')) || DEFAULT_TASKS);
  return (
    <TasksContext.Provider value={{list, saveList}}>
      {children}
    </TasksContext.Provider>
  );
}

export {
  TasksContext,
  TasksContextProvider
};