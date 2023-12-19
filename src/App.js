import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Survey from './testing/survey';
 
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Survey/>} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
