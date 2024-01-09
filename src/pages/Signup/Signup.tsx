import React, { useState } from 'react';
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [profilePic, setProfilePic] = useState<File | null>(null);

  // handle login
  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("signup credentials : ", { name, email, password, profilePic });
    // Here you can add code to handle form submission, including the profilePic file.
  };

  // handle profile pic upload
  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(e.target.files[0]);
    }
  };

  return (
    <div className='signup-wrapper'>
      <form onSubmit={handleSignup} className='signup-form'>
        <div className="input-field">
          <label>Name</label>
          <input name='name' type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="input-field">
          <label>Email</label>
          <input name='email' type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="input-field">
          <label>Password</label>
          <input name='password' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="input-field">
          <label>Profile Picture</label>
          <input name='profilePic' type="file" onChange={handleProfilePicChange} />
        </div>

        <button className='signup-button' type='submit'>Signup</button>
      </form>

      <h2 className='or'>OR</h2>

      <button className='sign-in-with-google'>Sign up with Google <img className='google-logo' src="/src/assets/google.png" alt="google-logo" /></button>
    </div>
  );
};

export default Signup;
