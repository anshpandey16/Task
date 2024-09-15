import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy credentials check
    if (email === 'admin' && password === 'password') {
      navigate('/home');
    } else {
      setErrorMessage('Invalid login credentials');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <p>By signing in, you are agreeing to our <a href="#">Terms and privacy policy</a></p>
      <div className="login-tabs">
        <a href="#" className="active">Login</a>
        <a href="#">Register</a>
      </div>
      <form onSubmit={handleLogin}>
        <input
          type='text'
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login-options">
          <label className='ok'>
            <input type="checkbox" /> <p>Remember</p>
          </label>
          <a href="#">Forget password</a>
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>or connect with</p>
      <div className="social-icons">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-pinterest"></i>
        <i className="fa fa-linkedin"></i>
      </div>

      <div className="fingerprint">
        <img src="/fingerprint-icon.png" alt="Fingerprint Login" />
      </div>
    </div>
  );
};

export default Login;
