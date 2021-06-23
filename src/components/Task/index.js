import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";
import { getDaysAgo } from "../../helpers/dates";
import './index.scss';

function Task(props) {
  const { saveList } = useContext(TasksContext);
  const { label, taskId, id, completed, completionDate} = props;

  const updateTasks = event => {
    const field = event.target;
    const currentTaskCompleted = field.checked;
    const currentTaskCompletionDate = currentTaskCompleted ? new Date() : null;
    const currentTaskId = parseInt(field.dataset.id);

    saveList(prevList => {
      const newList = [...prevList];
      const index = newList.findIndex(item => item.id === currentTaskId);
      newList[index] = {
        ...newList[index],
        completed: currentTaskCompleted,
        completion_date: currentTaskCompletionDate
      }
      localStorage.setItem('oraciones', JSON.stringify(newList));
      return newList
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