import React, { useEffect, useState } from "react";

export default function ControlledInput () {
    const [myText, setMyText] = useState ('');
    const [myText2, setMyText2] = useState ('');

    console.log('ControlledInput: Render')

   useEffect(() =>{
    console.log('ControlledInput : Mount')
   })
    return (
    <>
    <h1>Controlled Input</h1>
    <input onChange={(e)=>setMyText(e.target.value)}></input>
    <h2>{myText}</h2>
    </>)
}