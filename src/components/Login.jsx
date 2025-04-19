import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/style/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.js';
import { useAuth } from '../context/GlobalState.jsx';

export default function Login() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
console.log({auth})
  // ✅ log in
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          console.log('Signed in:', auth.user);
          navigate('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  // create new account
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          console.log('User registered:', auth.user);
          navigate('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <Link to="/">
        <FontAwesomeIcon className='header-logo' icon={faAmazon} size="2x" color="#FF9900" />
      </Link>

      <div className="login-container">
        <h1>Log In Page</h1>
        <form className='form-page' onSubmit={signIn}>
          <h5>E-mail</h5>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type='submit' className='submit-btn'>Sign In</button>

          <p>
            By continuing, you agree to Amazon's Fake Clone Condition of Use and Privacy Notice
          </p>

          <button className='registeration' onClick={register}>
            Create Your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}
