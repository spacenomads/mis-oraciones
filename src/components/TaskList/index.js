import { useContext } from 'react';
import Task from '../Task';
import { TasksContext } from '../../context/TasksContext';



function TaskList() {
  const { tasks } = useContext(TasksContext);
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
      <ul className="app__todos">
        {tasks.map(createTasks)}
      </ul>
    </div>
  );
}

export default TaskList;