import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/home';
import AppState from './context/AppState';

const App = () => {
  return (
    <div className="App">
      <h1>Hiiii</h1>
      <AppState>
        <Router>
        <Navbar/>
            <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/home' element={<Home/>}></Route>
              <Route exact path='/about' element={<About/>}></Route>
            </Routes>
        </Router>
      </AppState>
    </div>
  );
}

export default App;
