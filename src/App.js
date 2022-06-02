
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Dashboard/Dashboard';
import MyItem from './Components/Dashboard/MyItem';
import MyReview from './Components/Dashboard/MyReview';
import MyHistory from './Components/Dashboard/MyHistory';

function App() {
  return (
    <div>
   <Navbar></Navbar>
   <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/purchase" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } >
            <Route index element={<MyItem/>}></Route>
          <Route path="review" element={<MyReview/>}></Route>
          <Route path="history" element={<MyHistory/>}></Route>
          </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/summary" element={<Summary/>} />

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
