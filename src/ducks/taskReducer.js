let task_id = -1;
export const taskReducer = (state=[], action) => {
    switch (action.type){
        case 'ADD_TASK':
            task_id++
            return [...state, {
                id: task_id,
                task: action.payload.task
            }]; 
        default:
            return state;
    }
}