import React, {useState} from "react";

const Home = () => {
  const [toDos, myToDos] = useState([]);
  const [myText, setMyText] = useState('');
  const [hoverIndex, setHoverIndex] = useState(-1);
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

  const onMouseEnter = (index) => {
    setHoverIndex(index);
  }

  const onMouseLeave = () => {
    setHoverIndex(-1);
  }

  return (
    <div className="toDosMain">
      <h1>To Dos List</h1>
      <input className="addedTask" value={myText} onChange={InputChange} placeholder={myText === '' ? 'no task added' : ''}/>
      <ul>
        {toDos.map((data, index) => (
          <div key={index} onMouseEnter={() => onMouseEnter(index)} onMouseLeave={onMouseLeave}>
            <li className="tasks">
              <h1>{data}</h1>
              {hoverIndex === index ? <button className="deletebtn" onClick={() => deleteTodo(index)}>Delete</button> : null}
            </li>
          </div>
        ))}
      </ul>
      <button className="saveTodos" onClick={newTodos}>Save</button>
    </div>
  );
}

export default Home;
