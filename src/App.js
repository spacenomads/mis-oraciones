import TodoList from './components/TodoList';
import NewTask from './components/NewTask';
import { TodoContextProvider } from './context/TodoContext';
function App() {
  return (
    <TodoContextProvider>
      <div className="app">
        <TodoList />
        <NewTask />
      </div>
    </TodoContextProvider>
  );
}

export default App;
