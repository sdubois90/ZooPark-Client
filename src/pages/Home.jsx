import React from 'react';
import { NavLink } from 'react-router-dom';

// import AddPost from '../components/Forms/AddPost';

import '../styles/Home.css';

const Home = (props) => {
	return (
		<div className="home-container" style={{ height: 'calc(100vh - 70px)' }}>
			<div className="ui center aligned container">
				<h1 style={{ fontSize: '6em' }}>We are ZooPark</h1>
				<h2 style={{ fontSize: '1.8em' }}>A social network for dogs, cats and their human pets</h2>

				<button className="ui basic violet button" style={{ marginTop: '2.5em' }}>
					<NavLink to="/signup">Get Started</NavLink>
				</button>
			</div>
		</div>
	);
};

export default Home;
