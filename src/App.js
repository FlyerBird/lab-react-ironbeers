
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Beers from './views/Beers';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/beers' element={<Beers />} />
        </Routes>
    </div>
  );
}

export default App;
