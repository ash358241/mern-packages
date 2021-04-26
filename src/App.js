import logo from './logo.svg';
import './App.css';
import FrontEnd from './components/FrontEnd/FrontEnd';
import Backend from './components/Backend/Backend';

function App() {
  return (
    <div id="mainDiv" className="mb-3 shadow-lg  mb-5 bg-body rounded">
      <FrontEnd></FrontEnd>
    <Backend></Backend>
    </div>
  );
}

export default App;
