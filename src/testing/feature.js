import React, { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from '../auth/component/Login';
import Logout from '../auth/component/Logout';
import Con from './test';

const Feature = () => {
  const [stateAuth, setStateAuth] = useState(null); // Initialize stateAuth as null

  const response = (res) => {
    console.log('Authentication response:', res);
    setStateAuth(res);
  };

  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{ height: "100vh" }}>
      <GoogleOAuthProvider clientId="958435493000-ouhdln2cfe4bup19oockecn1nhcehtbe.apps.googleusercontent.com">
        {stateAuth ? ( // Check if stateAuth contains authentication data
          <div className='d-flex justify-content-center align-items-center flex-column'>
            {stateAuth.profileObj && stateAuth.profileObj.picture ? (
              <img
                src={stateAuth.profileObj.picture}
                alt={stateAuth.profileObj.name}
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              />
            ) : (
              <p>No user image available</p>
            )}
            <Con user={stateAuth} />
            <Logout response={response} />
          </div>
        ) : (
          <Login response={response} />
        )}
      </GoogleOAuthProvider>
    </div>
  );
};

export default Feature;
