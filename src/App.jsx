import './App.css'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import NavBar from './components/navbar';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavBar/>
      </BrowserRouter>
    </>
  )
}

export default App
