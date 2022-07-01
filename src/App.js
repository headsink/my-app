import logo from './logo.svg';
import './App.css';
import Mainheader from './component/mainheader';

function App() {
  return (
    <div className='w-screen h-screen'>
      <Mainheader></Mainheader>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
