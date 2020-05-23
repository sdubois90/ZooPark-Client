import React from 'react';
import { NavLink } from 'react-router-dom';
import { withUser } from '../components/Auth/withUser';
import apiHandler from '../api/apiHandler';

import '../styles/NavMain.css';

const NavMain = (props) => {
	const { context } = props;

	function handleLogout() {
		apiHandler
			.logout()
			.then(() => {
				context.removeUser();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<nav className="NavMain" style={{ position: "relative" }}>
			<NavLink exact to="/">
				<i className="logo" className="home big black icon" />
			</NavLink>
			<ul className="nav-list">
				<li style={{ position: "absolute", width:"10vmin", left:"47.5%" }}>
					<img src="/images/panda.png" alt="" />
				</li>
				{context.isLoggedIn && (
					<React.Fragment>
						<li>
							<button className="ui black button">
								<NavLink to="/profile">{context.user && context.user.email}</NavLink>
							</button>
						</li>
						<li>
							<p onClick={handleLogout} className="ui black button">
								Logout
							</p>
						</li>
					</React.Fragment>
				)}
				{!context.isLoggedIn && (
					<React.Fragment>
						<li>
							<button className="ui black button">
								<NavLink to="/signin">Log in</NavLink>
							</button>
						</li>
						<li>
							<button className="ui black button">
								<NavLink to="/signup">Create account</NavLink>
							</button>
						</li>
					</React.Fragment>
				)}
			</ul>
		</nav>
	);
};

export default withUser(NavMain);
