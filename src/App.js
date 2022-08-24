import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Billing from './Components/Billing';
import CompanySetting from './Components/CompanySetting';
import Dashboard from './Components/Dashboard';
import General from './Components/General';
import Position from './Components/Position';
import Setting from './Components/Setting';
import Teams from './Components/Teams';
import Users from './Components/Users';
import { useState } from "react";

function App() {

  const [click, setClick] = useState("General")

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/users" element={<Users click={click} setClick={setClick}/>}/> 
        <Route path="/general" element={<General click={click} setClick={setClick}/>}/> 
        <Route path="/billing" element={<Billing click={click} setClick={setClick}/>}/> 
        <Route path="/teams" element={<Teams click={click} setClick={setClick}/>}/> 
        <Route path="/position" element={<Position/>}/> 
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
