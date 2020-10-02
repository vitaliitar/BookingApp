import React from 'react';
import styles from './Burger.module.scss';

const Burger = ({ burgerState, setBurgerState }) => {
  return (
    <div>
      <div
        className={burgerState ? styles.container : styles.change}
        onClick={() => setBurgerState(!burgerState)}
      >
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    </div>
  );
};

export default Burger;
