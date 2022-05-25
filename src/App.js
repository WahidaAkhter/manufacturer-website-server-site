
import './App.css';
import Navbar from './Components/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Purchase from './Components/Purchase/Purchase';

function App() {
  return (
    <div>
   <Navbar></Navbar>
   <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/purchase" element={<Purchase/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
