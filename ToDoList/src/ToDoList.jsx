import React, {useState} from 'react'
import {useEffect} from 'react'
import NewToDoForm from './NewToDoForm'
import ToDo from './ToDo'

//render a NewToDoForm and the list of ToDo components; create state the stores all todos
function ToDoList() {
    //should this be an array?
    const [toDos, setToDos] = useState([])


    const deleteTask = id => {
        setToDos(toDos => toDos.filter(todo => todo.id !== id));
    };
    
    // const addBox = (newBox) => {
    //     //the newBox data is added to the array 'boxes'
    //     setBoxes(boxes => [...boxes, newBox]);
    //     console.log('used addBox method to create new box')}
    //     console.log({boxes})

    
    // function addToDo (NewToDo) {
    //     setToDos(toDos => {

    //         [...toDos, NewToDo]
    //     })
    //     console.log('used addToDo to create new task')
    //     console.log({toDos})
    // }
    const addToDo = (NewToDo) => {
        //create new array of todos
        setToDos(toDos => [...toDos, NewToDo]
        )
        console.log('used addToDo to create new task')
    }

    useEffect(() => {
        console.log('Current state of toDos:', toDos);
    }, [toDos]); // Log the state whenever `toDos` changes

    const ToDoComponents = toDos.map(todo => {
        return (
        <ToDo
            deleteTask={deleteTask}
            key={todo.id}
            id={todo.id}
            task={todo.task}
            // update={update}
        />
        )
        });



    return (
        <>
        <NewToDoForm addToDo={addToDo}/>    
        
        {/* //list of ToDo components */}
        <ul>
        {ToDoComponents}
        </ul>
        </>
        )

}

export default ToDoList
