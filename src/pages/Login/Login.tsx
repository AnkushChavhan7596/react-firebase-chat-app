import React, { useState } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail]=useState<string | null>(null);
  const [password, setPassword]=useState<string | null>(null);


  // handle login
  const handleLogin = (e:any) => {
    e.preventDefault();
    console.log("login credentials : ", {email, password})
  }

  return (
    <div className='login-wrapper'>

      <form onSubmit={handleLogin} className='login-form'>
        <div className="input-field">
          <label>Email</label>
          <input name='email' type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
        </div>

        <div className="input-field">
          <label>Password</label>
          <input name='password' type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
        </div>

        <button className='login-button' type='submit'>Login</button>
      </form>

      <h2 className='or'>OR</h2>

      <button className='sign-in-with-google'>Sign in with google <img className='google-logo' src="/src/assets/google.png" alt="google-logo" /> </button>

      <p className='bottom'>Don't have an account? <Link to='/signup'>Signup</Link></p>

    </div>
  )
}

export default Login