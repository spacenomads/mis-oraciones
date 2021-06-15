import { useContext } from 'react';
import Todo from '../Todo';
import { TodoContext } from '../../context/TodoContext';



function TodoList() {
  const { tasks } = useContext(TodoContext);
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
        />
      </li>
    );
  }
  
  return (
    <div>
      <ul className="app__todos">
        {tasks.map(createTasks)}
      </ul>
    </div>
  );
}

export default TodoList;