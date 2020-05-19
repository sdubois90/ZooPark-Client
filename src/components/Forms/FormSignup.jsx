import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UserContext from '../Auth/UserContext';
import apiHandler from '../../api/apiHandler';

class FormSignup extends Component {
	static contextType = UserContext;

	state = {
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	};

	handleChange = (event) => {
		const value =
			event.target.type === 'file'
				? event.target.files[0]
				: event.target.type === 'checkbox' ? event.target.checked : event.target.value;

		const key = event.target.name;

		this.setState({ [key]: value });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		apiHandler
			.signup(this.state)
			.then((data) => {
				this.context.setUser(data);
				this.props.history.push('/main');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		return (
			<div className="home-container" style={{ height: 'calc(100vh - 70px)' }}>
				<div class="ui center aligned container">
					<p id="sub-title">Howdy stranger! How are you today?</p>
				</div>
				<form class="ui form text container segment" onChange={this.handleChange} onSubmit={this.handleSubmit}>
					<div class="required field">
						<label htmlFor="firstName">First name</label>
						<input type="text" id="firstName" name="firstName" placeholder="First Name" />
					</div>
					<div class="required field">
						<label htmlFor="lastName">Last name</label>
						<input type="text" id="lastName" name="lastName" placeholder="Last Name" />
					</div>
					<div class="required field">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" placeholder="meow@schmoe.com" />
					</div>
					<div class="required field">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Shhh...don't tell it to anyone!"
						/>
					</div>
					{/* <label htmlFor="picture">Picture</label>
				<input type="file" id="picture" name="picture" /> */}
					<button class="ui button" type="submit">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default withRouter(FormSignup);
