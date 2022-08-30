
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Beers from './views/Beers';
import BeerDetail from './views/BeerDetail';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/beers' element={<Beers />} />
          <Route path='/beers/:beerId' element={<BeerDetail />} />
          <Route path='/random-beer' element={<RandomBeer />} />
          <Route path='/new-beer' element={<NewBeer />} />
        </Routes>
    </div>
  );
}

export default App;
