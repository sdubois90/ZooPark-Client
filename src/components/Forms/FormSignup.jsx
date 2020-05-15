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
			<form onChange={this.handleChange} onSubmit={this.handleSubmit}>
				<label htmlFor="firstName">First name</label>
				<input type="firstName" id="firstName" name="firstName" />
				<label htmlFor="lastName">Last name</label>
				<input type="lastName" id="lastName" name="lastName" />
				<label htmlFor="email">Email</label>
				<input type="email" id="email" name="email" />
				<label htmlFor="password">Password</label>
				<input type="password" id="password" name="password" />
				{/* <label htmlFor="picture">Picture</label>
				<input type="file" id="picture" name="picture" /> */}
				<button>Submit</button>
			</form>
		);
	}
}

export default withRouter(FormSignup);
