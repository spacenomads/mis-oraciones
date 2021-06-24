import { useContext } from 'react';
import Task from '../Task';
import { TasksContext } from '../../context/TasksContext';
import { sortByCompletionDate, sortByCompletedTask } from '../../helpers/sorts';



function TaskList() {
  const { list } = useContext(TasksContext);
  const emptyList = !list.length;
  const createTasks = todo => {
    const { id, label, completed, completion_date} = todo;
    const taskId = `task-${id}`;

    return (
      <li className="app__todo" key={taskId}>
        <Task
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
      {!emptyList && <ul className="app__todos">
        {list
          .sort((a,b)=>a.id > b.id)
          .sort(sortByCompletionDate)
          .sort(sortByCompletedTask)
          .map(createTasks)}
      </ul>}
      {emptyList && <p>No hay tareas, ¿quieres crear una?</p>}
    </div>
  );
}

export default TaskList;