import React, {useState} from 'react'
import { v4 as uuid } from 'uuid';

//render a form with one input for the to do; when form is submitted, creates a new ToDo component
const NewToDoForm = ({addToDo}) => {
//empty string? #################################
    const [task, setTask] = useState("")


    const handleChange = evt => {
        setTask(evt.target.value) 
        console.log('called handleChange')
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        //function from parent that updates parent's state with new task; pass in object with new task
        //#################################DON'T USE SPREAD#################
        addToDo({task, id:uuid()})
        // addToDo({...task, id:uuid()})
        console.log('called handle submit')
        console.log({task})

        //reset task; method
        setTask('')
        console.log({task})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='task'>Task</label>
            <input type='text' name='toDo' value={task} id='task' onChange={handleChange}></input>
            <button type='submit'>Add a task</button>
        </form>

    )
}
export default NewToDoForm