import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";
import { getDaysAgo } from "../../helpers/dates";
import './index.scss';

function Task(props) {
  const { saveTasks } = useContext(TasksContext);
  const { label, taskId, id, completed, completionDate} = props;

  const updateTasks = event => {
    const field = event.target;
    const currentTaskCompleted = field.checked;
    const currentTaskCompletionDate = currentTaskCompleted ? new Date() : null;
    const currentTaskId = parseInt(field.dataset.id);

    saveTasks(prevTasks => {
      const newTasks = [...prevTasks];
      const index = newTasks.findIndex(item => item.id === currentTaskId);
      newTasks[index] = {
        ...newTasks[index],
        completed: currentTaskCompleted,
        completion_date: currentTaskCompletionDate
      }
      localStorage.setItem('oraciones', JSON.stringify(newTasks));
      return newTasks
    });
  }

  const getCompletionDate = () => {
    return completed ? `@${getDaysAgo(completionDate)}`:'';
  }

  return (
    <div className={`task ${completed ? 'task--completed':''}`}>
      <input
        className="task__field"
        type="checkbox"
        name="tasks"
        id={taskId}
        data-id={id}
        checked={completed}
        onChange={updateTasks}
      />
      <label htmlFor={taskId}>{label} {getCompletionDate()}</label>
    </div>
  );
}

export default Task;