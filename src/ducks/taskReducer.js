let task_id = -1;
export const taskReducer = (state=[], action) => {
    switch (action.type){
        case 'ADD_TASK':
            task_id++
            return [...state, {
                id: task_id,
                task: action.payload.task,
                completed: false
            }]; 
            case 'REMOVE_TASK':
                return state.filter(
                    task => task.id!==action.payload.id
                )
            case 'COMPLETE_TASK':
                return state.map(
                    task => {
                        if(task.id === action.payload.id){
                            return {...task, completed: true}
                        }
                        return task
                    }
                )
        default:
            return state;
    }
}