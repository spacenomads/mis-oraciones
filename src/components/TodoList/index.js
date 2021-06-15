import { useState } from 'react';
import Todo from '../Todo';

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



function TodoList() {
  const [tasks, saveTasks] = useState(DEFAULT_TASKS);

  const createTasks = todo => {
    const { id, label, completed } = todo;
    const taskId = `task-${id}`;

    return (
      <li className="app__todo" key={taskId}>
        <Todo
          label={label}
          id={id}
          taskId={taskId}
          checked={completed}
          saveTasks={saveTasks}
        />
      </li>
    );
  }
  
  return (
    <ul className="app__todos">
      {tasks.map(createTasks)}
    </ul>
  );
}

export default TodoList;