import { createContext, useState } from "react";
const DEFAULT_TASKS = []; 

const TasksContext = createContext();

function TasksContextProvider({children}) {
  const defaultList = JSON.parse(localStorage.getItem('oraciones')) || DEFAULT_TASKS;
  const [list, saveList] = useState(defaultList.filter(a=>a.label.trim()));
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