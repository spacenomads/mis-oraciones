import TaskList from './components/TaskList';
import NewTask from './components/NewTask';
import { TasksContextProvider } from './context/TasksContext';
function App() {
  return (
    <TasksContextProvider>
      <div className="app">
        <TaskList />
        <NewTask />
      </div>
    </TasksContextProvider>
  );
}

export default App;
