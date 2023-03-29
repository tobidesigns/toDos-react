import React, {useState, useEffect} from "react";

const Home = () => {
  const [toDos, setToDos] = useState([]);
  const [myText, setMyText] = useState('');
  const [hoverIndex, setHoverIndex] = useState(-1);
  console.log('render');

  useEffect(() => {
    console.log('rendering from useEffect')
    fetch('https://assets.breatheco.de/apis/fake/todos/user/tobiraheem').then(res => res.json()).then(data => setToDos(data)).catch(error => console.log('error: ', error))
  },[])
  
  const newTodos = () => {
    const updatedTodos = [...toDos, myText.trim()];
    setToDos(updatedTodos);
    fetch('https://assets.breatheco.de/apis/fake//todos/user/tobiraheem',{
      method: 'PUT',
      mode: 'cors', 
      body: JSON.stringify(updatedTodos),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then(response => console.log('Success:', response))
    .catch(error => console.error(error));
  }

  const deleteTodo = (index) => {
    setToDos(toDos.filter(el => el.index != event.target.index))
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
        {toDos && toDos.map((data, index) => (
          <div key={index} onMouseEnter={() => onMouseEnter(index)} onMouseLeave={onMouseLeave}>
            <li className="tasks">
              <h1>{data.label}</h1>
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