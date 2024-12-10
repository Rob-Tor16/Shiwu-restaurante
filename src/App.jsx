import './App.css'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import NavBar from './components/navbar';
import Home from './components/Home';
import Login from './components/login';
import { useState } from 'react';

function App() {
  
  const [user, setUser ] = useState (null);

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        {user ? <Home/> : <Login/>}
      </BrowserRouter>
    </>
  )
}

export default App
