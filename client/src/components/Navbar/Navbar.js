import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../../redux/action-creators/auth";
import styles from './Navbar.module.scss';

const Navbar = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { currentUser } = useSelector((state) => state.authentication);
	const [activeServices, setActiveServices] = useState(false);

	const handleSignOut = () => {
		dispatch(signOut(history));
	};

	return (
		<nav className={styles.navigationWrapper}>
			<div className={styles.logoWrapper}>
				<span className={styles.stylish}>Stylish</span>
				<span className={styles.logo}>Logo</span>
			</div>
			{/* TODO logo add here*/}
			<ul className={styles.navigation}>
				{currentUser !== null ? (
					<>
					<li className={styles.parent} onClick={handleSignOut}>
						<Link className={styles.link} to="/">Sign out</Link>
					</li>
					{/*TODO active class add state management*/}
					<li
						className={styles.parent}
						// className={[styles.parent, styles[(activeServices === true ? 'active': '')]]}
						id={styles.services}
						// onClick={() => setActiveServices(!activeServices)}
					>
						<a className={styles.link} href="#">
							<i className={[styles.fas, styles.faMinus].join('')}>
							</i>
							Services
							<i className={[styles.fas, styles.faPlus].join('')}>
							</i>
						</a>

						<ul className={styles.subnavigation}>
							<li><a className={styles.link} href="#">Technology</a></li>
							<li><a className={styles.link} href="#">Houses</a></li>
							<li><a className={styles.link} href="#">Cars</a></li>
						</ul>
					</li>
					</>
				) : (
					<>
					<li className={styles.parent}>
						<Link className={styles.link} to="/">Sign in</Link>
					</li>
					<li className={styles.parent}>
						<Link className={styles.link} to="/signup">SignUp</Link>
					</li>
					</>
				)}

			</ul>
		</nav>
	);
};

export default Navbar;