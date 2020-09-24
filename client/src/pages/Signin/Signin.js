import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { faEye, faKey, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {clearAuthError, signIn} from '../../redux/action-creators/auth';
import styles from './Signin.module.scss';
import './Signin.module.scss';
import {handleErrorNotify} from "../../utils/error";

const Signin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { error } = useSelector((state) => state.authentication);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email format').required('Required!'),
      password: Yup.string().min(3, 'Invalid email or password').required('Required!'),
    }),
  });

  useEffect(() => {
    if (error) {
      handleErrorNotify();
    }
    dispatch(clearAuthError());
  }, [error]);

  const handleSignInClick = (email, password) => {
    dispatch(signIn({ email, password }, history));
  };

  return (
    <div className="overlay">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={formik.handleSubmit}>
        <div className="con">
          <header>
            <h2>Log In</h2>
            <p>login here using your username and password</p>
          </header>
          <div className={styles.inputGroup}>
            <FontAwesomeIcon icon={faUser} className={styles.icons} />
            <input
              className="form-input"
              type="email"
              placeholder="@Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>}
            <br />
            <FontAwesomeIcon icon={faKey} className={styles.icons} />
            <input
              className="form-input"
              type={(showPassword) ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <FontAwesomeIcon icon={faEye} className={styles.icons} onClick={() => setShowPassword(!showPassword)}/>
            <button
              onClick={() => handleSignInClick(formik.values.email, formik.values.password)}
              className={styles.loginBtn}
            >
              Login
            </button>
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
