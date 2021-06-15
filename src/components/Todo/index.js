function Todo(props) {
  const { label, taskId, id, completed, saveTasks} = props;

  const updateTasks = event => {
    const field = event.target;
    const field_completed = field.checked;
    const field_completion_date = completed ? new Date() : null;
    const field_id = parseInt(field.dataset.id);

    saveTasks(prevTasks => {
      const newTasks = [...prevTasks];
      const index = newTasks.findIndex(item => item.id === field_id);
      newTasks[index] = {
        ...newTasks[index],
        completed: field_completed,
        completion_date: field_completion_date
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