import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Contact from './contact';
import About from './about';
import NavBar from './navBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
</Router>
);

