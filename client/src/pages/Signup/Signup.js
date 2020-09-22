import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signUp } from "../../redux/action-creators";
import './Signup.module.scss';
import styles from "../Signin/Signin.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faKey, faUser, faUserPlus} from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { error } = useSelector((state) => state.authentication);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSignUpClick = (event) => {
		event.preventDefault();
		dispatch(signUp({ email, password }, history));
	};

	return (
	<div className="overlay">
		<form>
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
					<button onClick={handleSignUpClick} className={styles.loginBtn}>Create an account</button>
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