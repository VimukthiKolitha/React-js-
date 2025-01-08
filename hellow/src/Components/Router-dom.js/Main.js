import { BrowserRouter,Route,Routes } from "react-router-dom";
import React from 'react'
import About from "./About";
import Contact from "./Contact";
import Details from "./Details";
import User from "./User";

function Main() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Contact/Details" element={<Details/>}/>
    {/*dynamic id*/}
    <Route path="/Contact/:id" element={<User/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Main