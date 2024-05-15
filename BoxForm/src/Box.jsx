import React from 'react';

//should, when rendered, display a div element with style properties; the style properties are passed in via props from the BoxList component; its state contains the specific properties for each box;
//I used px instead of em;
const Box = (props) => {
    console.log(props.backgroundColor);
    //create new object; use style attributes as keys and props as values
    let inlineStyle = {width:`${props.width}px`, height:`${props.height}px`,
    backgroundColor:`${props.backgroundColor}`
    }
    
//function from parent component; deletes box by filtering all components other than props.id; calls function using props
    const handleClick = () => {
        props.deleteBox(props.id)
      
    };
    //the div has three style properties: width, height, and background color;
    return (
        
        <>
{/*when the Box component is displayed, add a button which, when clicked, removes that box*/}
        <div style={inlineStyle}></div>
        <button onClick={handleClick}>X</button>
        </>
            
    )
}
export default Box