import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
// import Con from './testing/test';
// import Feture from './testing/feature';
import Home from './testing/home';
import Manual from './testing/manual';
 
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/questions" element={<Manual/>} />
          {/* <Route path="/" element={<Feture/>} /> */}
          <Route path="/" element={<Home/>} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
