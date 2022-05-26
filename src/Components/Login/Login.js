import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";


const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);


  
  return (
   
       <div className='flex h-screen justify-center items-center'>
                <div class="card w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="text-center text-2xl font-bold">Login</h2>
                <div className="divider">OR</div>
                <button
                    onClick={() => signInWithGoogle()}
                    class="btn btn-outline">
                      Continue With Google
                </button>
              </div>
            </div>
       </div>
  )
}

export default Login;