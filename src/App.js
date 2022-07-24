import "./App.css";
import Mainheader from "./component/mainheader";
import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const increaseNum = () => {
    setNum(num + 1);
  };

  return (
    <div className="w-screen h-screen">
      <Mainheader></Mainheader>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>

    </div>
  );
}

export default App;
