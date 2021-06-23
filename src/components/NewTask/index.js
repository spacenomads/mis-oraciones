import { useState, useContext } from "react";
import { TasksContext } from "../../context/TasksContext";
import './index.scss';

const DEFAULT_TASK = {
  id: null,
  label: '',
  completed: false,
  completion_date: null
};
function NewTask() {
  const { tasks, saveTasks } = useContext(TasksContext);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [newTask, setNewTask] = useState(DEFAULT_TASK);

  const showModal = () => {
    setModalVisibility(true);
    setNewTask(DEFAULT_TASK);
  }

  const saveNewTask = event => {
    const task = event.target.value;
    setNewTask(prevTask => {
      return { ...prevTask, label: task, id: tasks.length + 1 };
    });
  };

  const addNewTask = event => {
    event.preventDefault();
    if (newTask.label) {
      saveTasks(prevTasks => {
        const newTasks = [...prevTasks, newTask];
        localStorage.setItem('oraciones', JSON.stringify(newTasks));
        return newTasks;
      });
      setModalVisibility(false);
    }
  };

  return (
    <div className="app__new-task">
      <button className="app__add-task" type="button" onClick={showModal}>Añade una nueva tarea</button>

      <div className={`app__new-task-block ${modalVisibility ? '':'hidden'}`}>
        <form className="app__form" onSubmit={addNewTask}>
          <div className="app__form-row">
            <label htmlFor="newTask" className="app__form-label">Qué queremos hacer?</label>
            <input name="newTask" id="newTask" type="text" className="app__form-field" value={newTask.label} onChange={saveNewTask} />
          </div>
          <div className="app__form-row">
            <button type="submit" className="app__submit-new-task">Añadir</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTask;