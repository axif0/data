import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Con from './testing/test';
// import Feture from './testing/feature';
import Home from './testing/home';
 
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/questions" element={<Con/>} />
          {/* <Route path="/" element={<Feture/>} /> */}
          <Route path="/" element={<Home/>} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
