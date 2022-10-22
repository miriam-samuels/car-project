import './App.css';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom'
import CarInfo from './components/car-info';
import Landing from './components/landing';
import NavBar from './components/nav-bar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/home' exact element={<Landing />} />
          <Route path='/database' exact element={<CarInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
