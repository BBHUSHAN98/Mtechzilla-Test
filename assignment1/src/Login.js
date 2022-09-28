import React, { useEffect } from 'react'
import { auth } from './firebase-config'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const Navigate  = useNavigate()
    const signIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
         if(auth){
          Navigate('/Timer')
         }
        }).catch((error) => {
          console.log("")
        })
        
      }
      return (
        <div className="flex justify-center ">
        <h1 className='flex justify-center font-bold mt-96 px-20 text-3xl'>Sign in with Google</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-20 rounded mt-96" onClick={signIn}>
            Sign in
          </button>
        </div>
       
      );

}

export default Login