taskId = 0;
const taskReducer = (store = [], action) => {
    switch(action.type){
        case 'ADD_TASK':
            taskId ++
            return [...store, 
                {   task_id: taskId,
                    task: action.payload.task,
                    completed: false,
                }]
        case 'DELETE_TASK':
            return store.filter(
                curTask => {
                    return curTask.task_id!==action.payload.id
                }
            )
        case 'COMPLETE_TASK':
            return store.map(
                task => {
                    if(task.id===action.payload.id){
                        return {...task, completed: true}
                    }
                }
            )
        default:
            return store
    }
}