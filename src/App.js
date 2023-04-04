
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainNavigation from './Pages/NavBar/MainNavigation'
import Rating from './Pages/2-rating/rating.js';
import Cells from './Pages/1-cells/cells.js';

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Routes>
        <Route path='/cells' element={<Cells />}></Route>
        <Route path='/rating' element={<Rating />} />
        <Route path='/' element={<MainNavigation />}></Route>
      </Routes>
    </div>
  );
}

export default App;
