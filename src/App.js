import "./App.css";
import Mainheader from "./component/mainheader";
// import Formz from "./component/Formz"
import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  // const [showForm, setShowForm] = useState(false);

  const items = [
    {id : 1, name : 'berak'},
    {id: 2, name: 'poop'}
  ];

  const increaseNum = () => {
    setNum(num + 1);
  };

  // {showForm && <Formz />} // put this inside return

  return (
    <div className="w-screen h-screen">
      <Mainheader></Mainheader>
     
      
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <ul>
        {items.map((item)=> <li>{item.id}-{item.name}</li>)}
      </ul>

    </div>
  );
}

export default App;
