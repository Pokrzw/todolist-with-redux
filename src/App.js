import './App.css';
import TaskTemplate from './components/TaskTemplate';
import TaskForm from './components/TaskForm';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';

function App({store}) {
  const addedTasks = useSelector(state => state)

  return (
    <div className="App">
      <h1>Todo list</h1>
        <TaskForm/>
      <div className="tasklist">
        {console.log(addedTasks)}
        <ul>
          <li>
          { addedTasks.map(task => {
            return <TaskTemplate key={task.id} task={task.task}/>
          })}
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
