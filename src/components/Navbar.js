import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
	    window.addEventListener('scroll', navOnScroll)
	}, [scrolled])


	const navOnScroll = () => {
    	if (window.scrollY > 80) {
     		setScrolled(true)
    	} else {
     		setScrolled(false)
		}
	}

	return (
		<Fragment>
		<div className={scrolled ? 'navbar scrolled' : 'navbar'}>
			<div className="navbar__left">
				<Link to="/" className="navbar__title">
					Places
				</Link>
			</div>
			<div className="navbar__right">
				<Link to="/create" className="navbar__link">
					Create
				</Link>
			</div>
		</div>
		</Fragment>
	)
}

export default Navbar;