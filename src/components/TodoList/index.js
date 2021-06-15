import { useContext } from 'react';
import Todo from '../Todo';
import { TodoContext } from '../../context/TodoContext';



function TodoList() {
  const { tasks } = useContext(TodoContext);
  const createTasks = todo => {
    const { id, label, completed, completion_date} = todo;
    const taskId = `task-${id}`;

    return (
      <li className="app__todo" key={taskId}>
        <Todo
          label={label}
          id={id}
          taskId={taskId}
          completed={completed}
          completionDate={completion_date}
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