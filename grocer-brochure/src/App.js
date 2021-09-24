import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import Navbar from './Navbar';
import Cards from './Cards';


function App() {
  return (
    <div className="App">
   <Navbar/>
   <Cards/>

    </div>
  );
}

export default App;
