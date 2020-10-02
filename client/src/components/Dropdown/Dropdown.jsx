import React from 'react';
import styles from './Dropdown.module.scss'

const Dropdown = () => {
	return (
		<div>
			<div className={styles.dropdown}>
				<button className={styles.dropbtn}>Dropdown</button>
				<div className={styles.dropdownContent}>
					<a href="#">Link 1</a>
					<a href="#">Link 2</a>
					<a href="#">Link 3</a>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;