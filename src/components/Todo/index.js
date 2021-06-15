import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

function Todo(props) {
  const {saveTasks} = useContext(TodoContext);
  const { label, taskId, id, completed} = props;

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
      return newTasks
    });

  }

  return (
    <div className="task">
      <input
        className="task__field"
        type="checkbox"
        name="tasks"
        id={taskId}
        data-id={id}
        checked={completed}
        onChange={updateTasks}
      />
      <label htmlFor={taskId}>{label}</label>
    </div>
  );
}

export default Todo;