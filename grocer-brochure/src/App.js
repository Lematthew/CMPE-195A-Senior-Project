import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards';
import HomeCarousel from '../src/Components/HomeCarousel';


function App() {
  return (
    <div className="App">
      <HomeCarousel/>

       <Cards/>

    </div>
  );
}

export default App;
