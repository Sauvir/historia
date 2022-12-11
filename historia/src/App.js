import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import CreateMap from './components/CreateMap';
import Content from './components/Content';
import Events from './components/Events';
import People from './components/People';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Content />}/>
          <Route path='/maps' element={<CreateMap />}/>
          <Route path='/events' element={<Events />}/>
          <Route path='/people' element={<People />}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
