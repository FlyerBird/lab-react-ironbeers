
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Beers from './views/Beers';
import BeerDetail from './views/BeerDetail';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/beers' element={<Beers />} />
          <Route path='/beers/:beerId' element={<BeerDetail />} />
        </Routes>
    </div>
  );
}

export default App;
