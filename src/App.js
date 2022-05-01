import './App.css';
import TaskTemplate from './components/TaskTemplate';

function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <div className="taskCreation">
        <h3>Create a task</h3>
        <input type="text"/>
        <button>Add task</button>
      </div>
      <div className="tasklist">
        <ul>
          <li>
          <TaskTemplate/>
          <TaskTemplate/>
          </li>
        </ul>
      </div>
      <div className="completed">
        <h3>Completed Tasks</h3>
      </div>
    </div>
  );
}

export default App;
