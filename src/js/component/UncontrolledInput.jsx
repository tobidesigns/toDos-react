import React, { useRef, useState } from "react";
export default function UncontrolledInput (){
    const [toDos, myToDos] = useState([]);
    const [myText, setMyText] = useState('');
    console.log('render');
    const newTodos = () => {
            myToDos([...toDos, myText.trim()]);
            console.log(toDos)
        }

        const deleteTodo = (index) => {
            const newTodos = [...toDos];
            newTodos.splice(index, 1);
            myToDos(newTodos);
          };

    const InputChange = (event) => {
        setMyText(event.target.value);
      };

    return(<>
    <h1>Uncontrolled Input</h1>
    <input value={myText} onChange={InputChange} />
    <button onClick={newTodos}>Save</button>
    {toDos.map((data, index) => (
        <div key={index}>
          <h1>{data}</h1>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      ))}
    </>
  );
}