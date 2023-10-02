import React from 'react'
import { GoogleLogout } from 'react-google-login';

const Logout = (props) => {
    const logout = ()=>{
        console.log('logout successful')
        props.response()
    }
    const clientId= "958435493000-ouhdln2cfe4bup19oockecn1nhcehtbe.apps.googleusercontent.com";
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={logout}
                
            ></GoogleLogout>
           
        </div>
    )
}

export default Logout