import '../App.css'
import { useDispatch } from 'react-redux'
import { completeTask, removeTask } from '../ducks/taskActions';

const TaskTemplate = ({task, id}) => {
    const dispatch = useDispatch()
    return ( 
        <div className="TaskTemplate">
            <button onClick={() => {
                dispatch(completeTask(id))
            }}></button>
            <p>{task}</p>
            <button onClick={()=>{
                dispatch(removeTask(id))
            }}>Usun</button>
        </div>
     );
}
 
export default TaskTemplate;