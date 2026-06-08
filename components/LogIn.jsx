'use client'

import { useAuth } from '@/context/AuthContext';
import { useSearchParams } from "next/navigation";
import { useState } from 'react';
import ChangePasswordForm from './ChangePasswordForm';

export default function LogIn() {
  const params = useSearchParams();
  const isReg = params.get('register');

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistration, setIsRegistration] = useState(isReg);
  const [error, setError] = useState(null);
  const [authenticating, setAuthenticating] = useState(false);
  const [showForgotOption, setShowForgotOption] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const { signup, login } = useAuth();

  async function handleAuthenticate() {
    if (!userName || !userName.includes('@') || password.length < 6 || authenticating) {
      return;
    }

    setError(null);
    setAuthenticating(true);

    try {
      if (isRegistration) {
        await signup(userName, password);
      } else {
        await login(userName, password);
      }
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      if (err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setShowForgotOption(true);
      }
    } finally {
      setAuthenticating(false);
    }
  }

  if (isForgotPassword) {
    return <ChangePasswordForm resetMode onClose={() => setIsForgotPassword(false)} />
  }

  return (
    <div className="login">
      <h2>{isRegistration ? 'Create an account' : 'Login'}</h2>
      {error && (
        <div>
          <p>❗{ error }</p>
        </div>
      )}
      <input type="email" placeholder="Email" value={userName} onChange={(evt) => { setUserName(evt.target.value)}} />
      <input type="password" placeholder="password" value={password} onChange={(evt) => { setPassword(evt.target.value)}} />
      <button onClick={handleAuthenticate} type="submit" disabled={ authenticating }>{authenticating ? 'Submitting...' :  'Submit'}</button>
      <div className="full-line" />
      <div>
        {showForgotOption && !isRegistration ? (
          <>
            <p>Forgot your password?</p>
            <button onClick={() => setIsForgotPassword(true)}>Change password</button>
          </>
        ) : (
          <>
            <p>{isRegistration ? 'Already have an account?' : 'Don\'t have an account?'}</p>
            <button onClick={() => {
              setIsRegistration(!isRegistration)
            }}>{isRegistration ? 'Log in' : 'Sign Up'}</button>
          </>
        )}
      </div>
    </div>
  )
}
