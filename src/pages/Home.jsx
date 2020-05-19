import React from 'react';
import { NavLink } from 'react-router-dom';

import AddPost from '../components/Forms/AddPost';

import '../styles/Home.css';

const Home = (props) => {
	return (
		<div className="home-container" style={{ height: 'calc(100vh - 70px)' }}>
			<div class="ui center aligned container">
				<p id="main-title">We are ZooPark</p>
				<p id="sub-title">A social network for dogs, cats and their human pets</p>

				<button class="ui primary button">
					<NavLink to="/signup">Get Started</NavLink>
				</button>
			</div>
		</div>
	);
};

export default Home;
