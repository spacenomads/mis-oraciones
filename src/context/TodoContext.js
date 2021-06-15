import { createContext, useState } from "react";
const DEFAULT_TASKS = [
  {
    id: 1,
    label: 'Hacer la comida',
    completed: false,
    completion_date: null
  },
  {
    id: 2,
    label: 'Dormir la siesta',
    completed: false,
    completion_date: null
  },
  {
    id: 3,
    label: 'Grabar un vídeo',
    completed: false,
    completion_date: null
  }
]; 

const TodoContext = createContext();

function TodoContextProvider({children}) {
  const [tasks, saveTasks] = useState(DEFAULT_TASKS);
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