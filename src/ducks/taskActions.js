export const addTask = (task) => {
    return{
        type: 'ADD_TASK',
        payload: {
            task
        }
    }
}

export const removeTask = (id) => {
    return {
        type: 'REMOVE_TASK',
        payload:{
            id
        }
    }
}

export const completeTask = (id) => {
    return {
        type: 'COMPLETE_TASK',
        payload:{
            id
        }
    }
}
