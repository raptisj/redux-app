import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<Fragment>
		<div className="navbar">
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