import React from 'react'
import LoginPage from './LoginPage';
import SignUpPage from './SignInPage';
import { useState,useRef } from 'react';

const LogMerging = ({setSignup}) => {
const [login,setisLogin] = useState(true);

  return (
    <div>
        {
            login ? <SignUpPage setisLogin={setisLogin} setSignup={setSignup} /> 
            
            : 
            
            <LoginPage setisLogin={setisLogin} login={login}/>
        }
        
    </div>
  )
}

export default LogMerging
