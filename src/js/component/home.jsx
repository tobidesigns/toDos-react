import React, {useState} from "react";
import ControlledInput from "./ControlledInput.jsx";
import UncontrolledInput from "./UncontrolledInput.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [on, setOn] = useState(true);
  return (
    <>
      {on ? (
		<>
        <button onClick={() => setOn(false)}>Show</button>
		<ControlledInput />
		</>
      ) : (
		<>
        <button onClick={() => setOn(true)}>Hide</button>
		<UncontrolledInput />
		</>
      )}
    </>
  );
};

export default Home;
