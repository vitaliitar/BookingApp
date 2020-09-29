import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../redux/action-creators/auth';
import styles from './Navbar.module.scss';
import {
  faSmile, faCar, faHome, faUser, faChartLine
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector((state) => state.authentication);

  const handleSignOut = () => {
    dispatch(signOut(history));
  };

  return (
    <nav className={styles.navigationWrapper}>
      <div className={styles.logoWrapper}>
        <span className={styles.stylish}>Stylish</span>
        <span className={styles.logo}>Logo</span>
      </div>
      {/* TODO logo add here */}
      <ul className={styles.navigation}>
        {currentUser !== null ? (
          <>
            <li className={styles.parent} onClick={handleSignOut}>
              <Link className={styles.link} to="/">
                Sign out
              </Link>
            </li>
            {/* TODO active class add state management */}
            <FontAwesomeIcon icon={faSmile} />
            <li className={styles.parent}>
              <Link className={styles.link} to='/'>
                Experience
              </Link>
            </li>
            <FontAwesomeIcon icon={faHome} />
            <li className={styles.parent}>
              <Link className={styles.link} to={'#'}>
                Stays
              </Link>
            </li>
            <FontAwesomeIcon icon={faCar} />
            <li className={styles.parent}>
              <Link className={styles.link} to={'#'}>
                Car Rentals
              </Link>
            </li>
            {/*TODO user profile icons here*/}
            {/*<div className={styles.profileWrapper}>*/}
              <FontAwesomeIcon icon={faUser} />

            {/*</div>*/}

          </>
        ) : (
          <>
            <li className={styles.parent}>
              <Link className={styles.link} to="/">
                Sign in
              </Link>
            </li>
            <li className={styles.parent}>
              <Link className={styles.link} to="/signup">
                SignUp
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
