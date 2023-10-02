import React from 'react';
import { GoogleOAuthProvider, googleLogout } from '@react-oauth/google';

const Logout = () => {
  const clientId = "958435493000-ouhdln2cfe4bup19oockecn1nhcehtbe.apps.googleusercontent.com";

  const handleLogout = () => {
    googleLogout()
      .then(() => {
        console.log('Logout successful');
        // You can perform additional actions after successful logout here.
      })
      .catch((error) => {
        console.error('Logout failed', error);
        // Handle logout error, if any.
      });
  };

  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <button onClick={handleLogout}>Logout</button>
      </GoogleOAuthProvider>
    </div>
  );
};

export default Logout;
