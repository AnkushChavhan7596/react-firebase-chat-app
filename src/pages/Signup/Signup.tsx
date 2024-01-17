// // Signup.tsx
// import React, { useState } from 'react';
// import "./Signup.css";
// import { Link } from 'react-router-dom';
// import { auth, db } from "../../../firebase";
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { Timestamp, doc, setDoc } from 'firebase/firestore';
// import { uploadFile } from '../../../helper.ts'; 

// const Signup = () => {
//   const [name, setName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [profilePic, setProfilePic] = useState<File | null>(null);
//   const [uploadProgress, setUploadProgress] = useState<number | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setProfilePic(e.target.files[0]);
//     }
//   };
  
//   const handleSignupWithEmailAndPassword = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");
  
//     if (!name || !email || !password) {
//       setError("Please enter all the details");
//       return;
//     }
  
//     try {
//       const res = await createUserWithEmailAndPassword(auth, email, password);
  
//       if (res) {
//         const user = {
//           uid: res.user.uid,
//           name,
//           email,
//           createdAt: Timestamp.fromDate(new Date()),
//           isOnline: true,
//           profileURL: '',
//         };
  
//         if (profilePic) {
//           // Check if the profile picture is the same as the one already uploaded
//           if (user.profileURL !== profilePic.name) {
//             const uploadResult = await uploadFile(profilePic, 'profile-pics', (progress: any) => setUploadProgress(progress));
//             user.profileURL = uploadResult.downloadURL || '';
//           }
//         }
  
//         await setDoc(doc(db, 'users', res.user.uid), user);
  
//         setName("");
//         setEmail("");
//         setPassword("");
//         setProfilePic(null);
//         setUploadProgress(null);
//         setError(null);
//       }
//     } catch (error: any) {
//       console.log(error);
//       setError(error.message);
//     }
//   };
  

//   return (
//     <div className='signup-wrapper'>
//       <form onSubmit={handleSignupWithEmailAndPassword} className='signup-form'>
//         <div className="input-field">
//           <label>Name</label>
//           <input name='name' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
//         </div>

//         <div className="input-field">
//           <label>Email</label>
//           <input name='email' type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>

//         <div className="input-field">
//           <label>Password</label>
//           <input name='password' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>

//         <div className="input-field">
//           <label>Profile Picture</label>
//           <input name='profilePic' type="file" onChange={handleProfilePicChange} />
//           {uploadProgress !== null && (
//             <p style={{ textAlign: 'center', marginTop: '5px' }}>{`Upload Progress: ${uploadProgress.toFixed(2)}%`}</p>
//           )}
//         </div>

//         {error && <p style={{ color: 'red', margin: '10px 0', textAlign: 'center' }}>{error}</p>}
//         <button className='signup-button' type='submit'>Signup</button>
//       </form>

//       <h2 className='or'>OR</h2>

//       <button className='sign-in-with-google'>Sign up with Google <img className='google-logo' src="/src/assets/google.png" alt="google-logo" /></button>

//       <p className='bottom'>Already have an account? <Link to='/login'>Login</Link></p>
//     </div>
//   );
// };

// export default Signup;

// Signup.tsx
import React, { useState } from 'react';
import "./Signup.css";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { auth, db } from "../../../firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Timestamp, doc, setDoc } from 'firebase/firestore';
import { uploadFile } from '../../../helper.ts';

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(e.target.files[0]);
    }
  };

  const handleSignupWithEmailAndPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("Please enter all the details");
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (res) {
        const user = {
          uid: res.user.uid,
          name,
          email,
          createdAt: Timestamp.fromDate(new Date()),
          isOnline: true,
          profileURL: '',
        };

        if (profilePic) {
          // Check if the profile picture is the same as the one already uploaded
          if (user.profileURL !== profilePic.name) {
            const uploadResult = await uploadFile(profilePic, 'profile-pics', (progress: any) => setUploadProgress(progress));
            user.profileURL = uploadResult.downloadURL || '';
          }
        }

        await setDoc(doc(db, 'users', res.user.uid), user);

        setName("");
        setEmail("");
        setPassword("");
        setProfilePic(null);
        setUploadProgress(null);
        setError(null);

        navigate('/login')
      }
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);

      if (res) {
        const user = {
          uid: res.user.uid,
          name: res.user.displayName || '',
          email: res.user.email || '',
          createdAt: Timestamp.fromDate(new Date()),
          isOnline: true,
          profileURL: res.user.photoURL || '',
        };

        // Set the user in the Firebase database
        await setDoc(doc(db, 'users', res.user.uid), user);

        // Reset the states
        setName('');
        setEmail('');
        setPassword('');
        setProfilePic(null);
        setUploadProgress(null);
        setError(null);

        navigate('/login')
      }
    } catch (error:any) {
      console.error('Google Sign-In failed:', error);
      setError(error.message);
    }
  };

 
  return (
    <div className='signup-wrapper'>
      <form onSubmit={handleSignupWithEmailAndPassword} className='signup-form'>
        <div className="input-field">
          <label>Name</label>
          <input name='name' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="input-field">
          <label>Email</label>
          <input name='email' type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="input-field">
          <label>Password</label>
          <input name='password' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="input-field">
          <label>Profile Picture</label>
          <input name='profilePic' type="file" onChange={handleProfilePicChange} />
          {uploadProgress !== null && (
            <p style={{ textAlign: 'center', marginTop: '5px' }}>{`Upload Progress: ${uploadProgress.toFixed(2)}%`}</p>
          )}
        </div>

        {error && <p style={{ color: 'red', margin: '10px 0', textAlign: 'center' }}>{error}</p>}
        <button className='signup-button' type='submit'>Signup</button>
      </form>

      <h2 className='or'>OR</h2>

      <button className='sign-in-with-google' onClick={handleGoogleSignIn}>Sign up with Google <img className='google-logo' src="/src/assets/google.png" alt="google-logo" /></button>

      <p className='bottom'>Already have an account? <Link to='/login'>Login</Link></p>
    </div>
  );
};

export default Signup;