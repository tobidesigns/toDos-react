import React, {useState} from "react";
import ToDosFunction from "./ToDosFunction.jsx";


fetch('https://assets.breatheco.de/apis/fake/todos/user/tobiraheem')
  .then(response => response.json())
  .then(data => {data = [...data, 'testing'];
console.log(data); return data}
  ).then(moreData => {moreData = [...moreData, 'i think this works but why?']; console.log(moreData)})
  .catch(error => console.log('error'));

  console.log("================")
  console.log("================")
  console.log("================")

  fetch('https://assets.breatheco.de/apis/fake/todos/user/tobiraheem')
  .then(response => (response.json()).then(data => console.log(data))).catch(console.log("error"))  


const Home = () => {
  return (
		<ToDosFunction/>
  );
};

export default Home;
