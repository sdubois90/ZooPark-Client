import React, { Component } from 'react';

import UserContext from '../Auth/UserContext';
import { withRouter } from 'react-router-dom';
import apiHandler from '../../api/apiHandler';

class FormSignin extends Component {
	static contextType = UserContext;

	state = {
		email: '',
		password: ''
	};

	handleChange = (event) => {
		const key = event.target.name;

		// You can test more if you have to handle different sorts of inputs.
		const value =
			event.target.type === 'file'
				? event.target.files[0]
				: event.target.type === 'checkbox' ? event.target.checked : event.target.value;

		this.setState({ [key]: value });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		apiHandler
			.signin(this.state)
			.then((data) => {
				this.context.setUser(data);
				this.props.history.push('/main');
			})
			.catch((error) => {
				console.log(error);
				// Display error message here, if you set the state
			});
	};

	render() {
		return (
			<div className="home-container" style={{ height: 'calc(100vh - 70px)' }}>
				<div class="ui center aligned container">
					<p id="sub-title">Sorry, I can't! My human and I have plans...</p>
				</div>
				<form class="ui form text container segment" onChange={this.handleChange} onSubmit={this.handleSubmit}>
					<div class="required field">
						<label htmlFor="email">Email</label>
						<input type="email" name="email" placeholder="meow@schmoe.com" />
					</div>
					<div class="required field">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" placeholder="Shhh...don't tell it to anyone!" />
					</div>

					<button class="ui button" type="submit">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default withRouter(FormSignin);
