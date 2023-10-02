// Feature.js

import React, { useState } from 'react';
import Login from '../auth/component/Login';
import Logout from '../auth/component/Logout';
import Con from './test';


const Feature = () => {
  const [stateAuth, setStateAuth] = useState();

  const response = (res) => {
    setStateAuth(res);
    console.log(res);
  };

  return (
    <div className='d-flex justify-content-center align-items-center flex-column'
      style={{ height: "100vh" }}
    >
      {!stateAuth ? (
      
        <Login response={response} />
      ) : (
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <img
            src={stateAuth.profileObj.imageUrl} // Display the user's image
            alt={stateAuth.profileObj.name} // Provide an alternative text
            style={{ width: "100px", height: "100px", borderRadius: "50%" }} // Adjust the image size and shape
          />
          <Con user={stateAuth} />
          <Logout response={response} />
  

        </div>
      )}
    </div>
  );
};

export default Feature;
