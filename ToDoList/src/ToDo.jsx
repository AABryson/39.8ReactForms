import React, {useState} from 'react'


//display a div with the to do task; for each to do component, there is a button with 'X' that removes the to do when clicked
const ToDo = (props) => {
    const handleClick = () => {
       props.deleteTask(props.id)
    };
        
    

    return (
        <div>
            <li>{props.task} </li>
        
            <button onClick={handleClick} >X</button>
           
        </div>
    )
}


export default ToDo;