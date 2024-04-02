import React from 'react'
import './Login.css'
import Button from '@mui/material/Button';
// import { auth,provider } from '../../Firebase/FirebaseComponent';


function Login() {
// const signIn = ()=>{
//   // auth.signInWithProvider(provider)
//   .then((result)=>{
//     console.log(result);
//   })
//   .catch((error)=>{alert(error.message)})
// }
  return (
    <div className='login'>
        
          <img src="https://betterstudio.com/wp-content/uploads/2022/12/5-facebook-logo-logo-PNG-betterstudio.com_.png" alt="logo" />
        
      <Button type='submit'  >
          Sign In
        </Button>
    </div>
  )
}

export default Login