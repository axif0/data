import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

import Con from '../../testing/test';

const Login = (props) => {
  const clientId = "958435493000-ouhdln2cfe4bup19oockecn1nhcehtbe.apps.googleusercontent.com";
  const [user, setUser] = useState({});

  const handleSuccess = (credentialResponse) => {
    const decoded = jwt_decode(credentialResponse.credential);

    setUser(decoded); // Update the user state with the decoded JWT

    console.log(decoded);
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleLoginError}
        />
      </GoogleOAuthProvider>

      {user && (
        <div>
          {user.picture && (
            <img src={user.picture} alt={user.name} style={{ width: "100px", height: "100px", borderRadius: "50%" }}></img>
          )}

          <h3>{user.name}</h3>       
        </div>
      )}
      {user && <Con user={user} />} {/* Render the Con component */}
    </div>
  );
};

export default Login;
