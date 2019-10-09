import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import btnStyles from '../../scss/components/Buttons.module.scss'
import formStyles from '../../scss/components/CreateForm.module.scss'

const Login = (props) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const loginUser = (e) => {
		e.preventDefault();

		axios.post('http://localhost:4000/api/user/login', {
        	email,
        	password
         })
        .then(function (response) {
        	axios.defaults.headers.common['auth-token'] = response.data;
        	// console.log(response.data)
			props.history.push('/dashboard');
        })
        .catch(function (error) {
            console.log(error);
        });
	}

	return (
		<Fragment>
			<div className="top-banner">
				{/*<h1>MainFeed Page</h1>*/}
			</div>
			<div className="container">
				<div className={formStyles.createForm}>
					<h2>Login</h2>
					<p>Don't have an account?
						<Link className="login-link" to={'/register'}>Register here</Link>
					</p>
					<form onSubmit={loginUser}>
						<div className={formStyles.createForm__field}>
							<label className={formStyles.createForm__label}>Email:</label>
							<input type="text" className={formStyles.createForm__input} onChange={(e) => setEmail(e.target.value)} />
						</div>
						<div className={formStyles.createForm__field}>
							<label className={formStyles.createForm__label}>Password:</label>
							<input type="password" className={formStyles.createForm__input} onChange={(e) => setPassword(e.target.value)} />
						</div>
						<div className="create-form__btn">
							<input type="submit" value="Login" className={btnStyles.btn__submit} />
						</div>
					</form>
				</div>
			</div>
		</Fragment>
	)
}

export default Login