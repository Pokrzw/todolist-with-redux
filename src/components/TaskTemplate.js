import '../App.css'
const TaskTemplate = ({task}) => {
    return ( 
        <div className="TaskTemplate">
            <button></button>
            <p>{task}</p>
            <button>Usun</button>
        </div>
     );
}
 
export default TaskTemplate;