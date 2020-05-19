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
		<nav className="NavMain">
			<NavLink exact to="/">
				<i className="logo" class="home big black icon" />
			</NavLink>
			<ul className="nav-list">
				{context.isLoggedIn && (
					<React.Fragment>
						<li>
							<NavLink to="/profile" class="ui black button">
								{context.user && context.user.email}
							</NavLink>
						</li>
						<li>
							<p onClick={handleLogout}>Logout</p>
						</li>
					</React.Fragment>
				)}
				{!context.isLoggedIn && (
					<React.Fragment>
						<li>
							<button class="ui black button">
								<NavLink to="/signin">Log in</NavLink>
							</button>
						</li>
						<li>
							<button class="ui black button">
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
