import { useState } from 'react';
import './Login.scss';
import Logo from '../../assets/logo.svg';
import Google from '../../assets/google.svg';
import LogoMini from '../../assets/logo-mini.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    if (!trimmedEmail || !trimmedPassword || !validateEmail(trimmedEmail)) {
      return;
    }
    localStorage.setItem('user', JSON.stringify({ email: email, password: password }));
    navigate('/dashboard');
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img className="login__logo-icon" src={Logo} alt="logo" />
      </div>

      <form className="login__form" onSubmit={handleLogin}>
        <img src={LogoMini} alt="logo-mini" />
        <h2 className="login__title">Log in to your account</h2>
        <p className="login__subtitle">Welcome back! Please enter your details.</p>

        <label className="login__label">Email</label>
        <input
          type="email"
          className="login__input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="login__label">Password</label>
        <input
          type="password"
          className="login__input"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="login__options">
          <label className="login__checkbox">
            <input type="checkbox" />
            Remember for 30 days
          </label>
          <a href="#" className="login__forgot">
            Forgot password
          </a>
        </div>

        <button className="login__button" type="submit">
          Sign In
        </button>
        <button className="login__button login__button--google">
          <img src={Google} alt="Logo" width="100" height="100" />
          Sign in with Google
        </button>

        <p className="login__signup">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
