import React, {useState} from 'react'
import NewBoxForm from './NewBoxForm.jsx'
import {useEffect} from 'react'
import Box from './Box.jsx'
/*BoxList holds the data from the form and passes that data to Box to be rendered; updates state boxes with data acquired using the addBox function*/
//should render all of the Box components and the NewBoxForm component
const BoxList = () => {
   
//state that contains boxes
    const [boxes, setBoxes] = useState([])
    //create function that will update boxes with new box data; it will be called in the onSubmit event handler in NewBoxForm; will update the state - boxes - above by passing in an object with the data of the new box - width, height, etc. the data/object is stored in the boxForm state (NewBoxForm)
    const addBox = (newBox) => {
        //the newBox data is added to the array 'boxes'
        setBoxes(boxes => [...boxes, newBox]);
        console.log('used addBox method to create new box')}
        console.log({boxes})

    
    //This logs the state whenever boxes changes
    useEffect(() => {
        console.log('Current state of boxes:', boxes);
    }, [boxes]); // Log the state whenever `boxes` changes
//delete a box by filtering all the other boxes into a new array; pass in the boxes id - props.id
    const deleteBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }
//this will render the Box component by iterating over the objects in the 'boxes' array and rendering a new Box component with the values derived from each iteration
    const boxProps = boxes.map(box => {
        return (

         <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            deleteBox={deleteBox}
        />
        
        )
        }) 
    
    return (
        <>
            {/*pass the parent function to the child component and access using props*/}
            <NewBoxForm addBox={addBox} />
        
        
        <div>
            {/*########################*/}
            {boxProps} 
        </div>
        
            
        </>
        
    )
}

export default BoxList;