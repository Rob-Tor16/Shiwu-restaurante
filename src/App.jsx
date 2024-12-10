import './App.css'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/login';
import app from './firebase/firebaseConfig.js';
import {getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  
  const [user, setUser ] = useState (null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if(usuarioFirebase){
      setUser(usuarioFirebase);
    }else{
      setUser(null);
    }
  });

  return (
    <>
      <BrowserRouter>
        {user ? <Home/> : <Login/>}
      </BrowserRouter>
    </>
  )
}

export default App
