import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Signup.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye, faKey, faUser, faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer } from 'react-toastify';
import styles from '../Signin/Signin.module.scss';
import { clearAuthError, signUp } from '../../redux/action-creators/auth';
import { handleErrorNotify } from '../../utils/error';

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { error } = useSelector((state) => state.authentication);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirm_password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email format').required('Required!'),
      password: Yup.string().min(3, 'Invalid email or password').required('Required!'),
      confirm_password: Yup.string()
        .oneOf([Yup.ref('password')], "Password's not match")
        .required('Required!'),
    }),
    onSubmit: (values) => {
      handleSignUpClick(values.email, values.password, values.confirm_password);
    },
  });

  useEffect(() => {
    if (error) handleErrorNotify('Please enter correct data');
    dispatch(clearAuthError());
  }, [error]);

  const handleSignUpClick = (email, password, confirm_password) => {
    if (password === confirm_password) {
      dispatch(signUp({ email, password }, history));
      console.log('ERROR', error);
    } else handleErrorNotify('Passwords mismatch');
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
            <h2>Sign Up</h2>
            <p>Create a new account here</p>
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
            <br />
            <FontAwesomeIcon icon={faKey} className={styles.icons} />
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password && (
              <p className={styles.error}>{formik.errors.password}</p>
            )}
            <br />
            <FontAwesomeIcon icon={faKey} className={styles.icons} />
            <input
              className="form-input"
              type="password"
              name="confirm_password"
              placeholder="Confirmation"
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
            />
            <button
              onClick={() => handleSignUpClick(
                formik.values.email,
                formik.values.password,
                formik.values.confirm_password,
              )}
              className={styles.loginBtn}
            >
              Create an account
            </button>
          </div>
          <div className={styles.signupSection}>
            <Link to="/" className={styles.linkToSignup}>
              Already have an account
            </Link>
            <FontAwesomeIcon icon={faUserPlus} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
