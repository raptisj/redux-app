import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from '../../actions/authActions'

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
	    window.addEventListener('scroll', navOnScroll)
	}, [scrolled])

	const { isAuthenticated, user, current } = useSelector(state => state.auth);
	const dispatch = useDispatch();

// console.log(user.name)
	const navOnScroll = () => {
    	if (window.scrollY > 80) {
     		setScrolled(true)
    	} else {
     		setScrolled(false)
		}
	}

	const logout = () => {
		console.log('grggrrg')
		dispatch(logoutUser())
	}

	const authNav = (
		<div className="navbar__right">
			<Link to="/" className="navbar__link">
				{current.name}
			</Link>
			<Link to="/dashboard" className="navbar__link">
				Dashboard
			</Link>
			<Link to="/create" className="navbar__link">
				Create
			</Link>
			<a onClick={logout} className="navbar__link">
				Logout
			</a>
		</div>
	)

	const guestNav = (
		<div className="navbar__right">
			<Link to="/login" className="navbar__link">
				Login
			</Link>
			<Link to="/register" className="navbar__link">
				Sign In
			</Link>
		</div>
	)

	return (
		<Fragment>
			<div className={scrolled ? 'navbar scrolled' : 'navbar'}>
				<div className="navbar__left">
					<Link to="/" className="navbar__title">
						Places
					</Link>
				</div>
				{isAuthenticated ? authNav : guestNav}
			</div>
		</Fragment>
	)
}

export default Navbar;