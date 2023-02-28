import React, { useRef, useState } from "react";
export default function UncontrolledInput (){
    const [toDos, myToDos] = useState([]);
    const [myText, setMyText] = useState('');
    console.log('render');
    const newTodos = () => {
            myToDos([...toDos, myText.trim()]);
            console.log(toDos)
        }

    const InputChange = (event) => {
        setMyText(event.target.value);
      };

    return(<>
    <h1>Uncontrolled Input</h1>
    <input value={myText} onChange={InputChange} />
    <button onClick={newTodos}>Save</button>
    {toDos.map((data, index)=>(<h1 key={index} >{data} </h1> ))}
    </>
    
)}