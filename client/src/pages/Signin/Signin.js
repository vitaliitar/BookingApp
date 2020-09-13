import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { faEye, faKey, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { signIn } from '../../redux/action-creators';
import styles from "./Signin.module.scss"
import './Signin.module.scss';

const Signin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { error } = useSelector((state) => state.authentication);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignInClick = (event) => {
    event.preventDefault();
    dispatch(signIn({ email, password }, history));
  };

  return (
    <div className="overlay">
      <form>
        <div className="con">
          <header>
            <h2>Log In</h2>
            <p>login here using your username and password</p>
          </header>
          <div className={styles.inputGroup}>
						<FontAwesomeIcon icon={faUser} className={styles.icons} />
            <input
              className="form-input"
              type="text"
              placeholder="@Email"
              required
              value={email}
              onChange={handleEmailChange}
            />
            <br />
            <FontAwesomeIcon icon={faKey} className={styles.icons}/>
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              name="password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            <FontAwesomeIcon icon={faEye} className={styles.icons} />
						{error !== null ? <div>{error}</div> : null}
						<button onClick={handleSignInClick} className={styles.loginBtn}>Login</button>
          </div>
          <div className={styles.signupSection}>
            <Link to="/signup" className={styles.linkToSignup}>
              Don't have an account?
            </Link>
            <FontAwesomeIcon icon={faUserPlus} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
