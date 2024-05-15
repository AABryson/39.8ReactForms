import React, {useState} from 'react'
import { v4 as uuid } from 'uuid';


const NewBoxForm = ({addBox}) => {
    
    const [boxForm, setBoxForm] = useState({width: '', height: '', backgroundColor:''})

{/*generic onChange handler*/}
    const handleChange = (evt) => {
        {/*destructued evt.target object*/}
        let {name, value} = evt.target
{/*###################()*/}
{/*the new key/value pair is added to the boxForm object*/}
{/*creates shallow copy of the boxForm object*/}
{/*so this is evt.target.name and evt.target.value as a computer property*/}
        setBoxForm(boxForm => ({
                ...boxForm,
                [name] : value 

            })
        )
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        //addBox is function from BoxList that will update its state - boxes - when there is a change in the child component; passed as props/addBox, it creates a new array with the old box items and a new box item; each item includes the properties width, height, backgroundcolor from the boxForm data, along with a unique id generated using the uuid() function. 
        //Using ...boxForm ensures that any properties of the boxForm state object that are not explicitly set in the handleChange function are preserved in the new object. This prevents unintentional deletion or modification of properties that are not being updated in the current operation.
         //###################
        addBox({...boxForm, id: uuid() })
        alert(`Created box, ${boxForm}`)
        //#########################reset the boxForm after submit
        setBoxForm({
            width: '',
            height: '',
            backgrounColor: ''
        });
        console.log('setBoxForm')
    }

    
    return (
    <div>
        <form onSubmit={handleSubmit}>

            <label htmlFor='width'>Width</label>
            <input type='number' value={boxForm.width} name='width' id='width' onChange={handleChange}></input>

            <label htmlFor='height'>height</label>      
            <input type='number' value={boxForm.height} name='height' id='height' onChange={handleChange}></input>

            <label htmlFor='color'>Background Color</label>
            <input type='text' value={boxForm.backgroundColor} name='backgroundColor' id='color' onChange={handleChange}></input>
            <button type='submit'>Add Box</button>

        </form>

        
    </div>
    )
}



export default NewBoxForm