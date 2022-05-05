import './App.css';
import TaskTemplate from './components/TaskTemplate';
import TaskForm from './components/TaskForm';
import {useSelector} from 'react-redux'


function App({store}) {
  const addedTasks = useSelector(state => state)

  return (
    <div className="App">
      <h1>Todo list</h1>
        <TaskForm/>
      <div className="tasklist">
        {console.log(addedTasks)}
        <ul>          
          { addedTasks.map(task => {
            if(task.completed===false){
              return (
                <li>
                      <TaskTemplate key={task.id} task={task.task} id={task.id}/>
                </li>      
                      )
            }
          })}
        </ul>
      </div>
      <div className="tasklist">
        <h3>Completed Tasks</h3>
        <ul>
        { addedTasks.map(task => {
            
            if(task.completed!==false){
              return (
                <li>
                      <TaskTemplate key={task.id} task={task.task} id={task.id}/>
                    </li>  
                      )
            }
          })}
        </ul>
        
      </div>
    </div>
  );
}

export default App;
