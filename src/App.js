
import './App.css';
import Navbar from './Components/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Purchase from './Components/Purchase/Purchase';
import SignUp from './Components/Login/SignUp';
import RequireAuth from './Components/Login/RequireAuth';
import Summary from './Components/Home/Summary';

function App() {
  return (
    <div>
   <Navbar></Navbar>
   <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="purchase" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/summary" element={<Summary/>} />

      </Routes>
    </div>
  );
}

export default App;
