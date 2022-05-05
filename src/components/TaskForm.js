import { Form, Formik, Field } from "formik";
import { addTask } from "../ducks/taskActions";
import { taskReducer } from "../ducks/taskReducer";
import React from 'react'
import { useDispatch } from 'react-redux'
const TaskForm = () => {
        const dispatch = useDispatch()
    return ( 
        <div className="TaskForm">
            <h3>Create a task</h3>
            <Formik
                initialValues={{
                    task: ''
                }}

                onSubmit={
                    (values, actions) => {
                        dispatch(addTask(values.task))
                        actions.resetForm()
                    }
                }
            >
                <Form>
                    <Field name='task' type="text"/>
                    <button type='submit'>Add task</button>
                </Form>
            </Formik>
        </div>
     );
}
 
export default TaskForm;