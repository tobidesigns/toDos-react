import React, { useRef, useState } from "react";
export default function ToDosFunction (){
    const [toDos, myToDos] = useState([]);
    const [myText, setMyText] = useState('No tasks, add a task');
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

    return(<div className="toDosMain">
    <h1>To Dos List</h1>
    <input className="addedTask" value={myText} onChange={InputChange} />
    <ul>
      {toDos.map((data, index) => (
        <div key={index}>
          <li className="tasks">
          <h1>{data}</h1>
          <button className="deletebtn" onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        </div>
      ))}
    </ul>
    <button className="saveTodos" onClick={newTodos}>Save</button>
    </div>
  );
}