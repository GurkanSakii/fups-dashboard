import { useState } from 'react';
import styles from './index.module.scss';

import { useNavigate } from 'react-router-dom';
import LogoMiniIcon from '../../assets/logo-mini-icon';
import LogoIcon from '../../assets/logo-icon';
import GoogleIcon from '../../assets/google-icon';

const LoginView = () => {
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
    <div className={styles['login']}>
      <div className={styles['login__logo']}>
        <LogoIcon className={styles['login__logo-icon']} />
      </div>

      <form className={styles['login__form']} onSubmit={handleLogin}>
        <LogoMiniIcon />
        <h2 className={styles['login__title']}>Log in to your account</h2>
        <p className={styles['login__subtitle']}>Welcome back! Please enter your details.</p>

        <label className={styles['login__label']}>Email</label>
        <input
          type="email"
          className={styles['login__input']}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className={styles['login__label']}>Password</label>
        <input
          type="password"
          className={styles['login__input']}
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className={styles['login__options']}>
          <label className={styles['login__checkbox']}>
            <input type="checkbox" />
            Remember for 30 days
          </label>
          <a href="#" className={styles['login__forgot']}>
            Forgot password
          </a>
        </div>

        <button className={styles['login__button']} type="submit">
          Sign In
        </button>
        <button className={`${styles['login__button']} ${styles['login__button--google']}`}>
          <GoogleIcon width="100" height="100" />
          Sign in with Google
        </button>

        <p className={styles['login__signup']}>
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginView;
