import React from 'react';
import './../../styles/CurrentUserEditForm.css';
import UserContext from '../Auth/UserContext';
import axios from 'axios';

class CurrentUserEditForm extends React.Component {
	static contextType = UserContext;

	state = {
		lastName: this.context.user.lastName,
		firstName: this.context.user.firstName,
		email: this.context.user.email,
		description: this.context.description,
		group: 'cats'
		// userInfo:this.context.user,
	};

	handleChange = (event) => {
		console.log(event.target.name);
		this.setState({ [event.target.name]: event.target.value });
	};

	handleForm = (event) => {
		event.preventDefault();

		axios
			.patch(
				'http://localhost:4000/api/users/' + this.context.user._id,
				{
					lastName: this.state.lastName,
					firstName: this.state.firstName,
					email: this.state.email,
					description: this.state.description,
					group: this.state.group
				},
				{ withCredentials: true }
			)
			.then((apiResult) => {
				console.log('updated user', apiResult);
				this.context.setUser(apiResult.data);
				this.props.hideEditForm();
				this.props.updatePost(apiResult.data);
			})
			.catch((apiError) => {
				console.log(apiError);
			});
	};

	render() {
		console.log('THE USER IN CONTEXT', this.context.user);
		return (
			<div className="ui segment">
				<form className="" onChange={this.handleChange} onSubmit={this.handleForm}>
					<div className="wrapper">
						Edit My Info
						<img className="pic" src="/media/plant.svg" alt="user_pic" />
						<div>
							{/* <p className="label"> */}
							<div class="field">
								<label htmlFor="firstName">First name</label>
							</div>
							{/* </p> */}
							<p>
								<input
									type="text"
									id="firstName"
									name="firstName"
									defaultValue={this.context.user.firstName}
								/>
							</p>
						</div>
						<div>
							<p className="label">
								<label htmlFor="lastName">Last name</label>
							</p>
							<p>
								<input
									type="text"
									id="lastName"
									name="lastName"
									defaultValue={this.context.user.lastName}
								/>
							</p>
						</div>
						<div>
							<p className="label">
								<label htmlFor="email">Email</label>
							</p>
							<p>
								<input type="text" id="email" name="email" defaultValue={this.context.user.email} />
							</p>
						</div>
						<div>
							<p className="label">
								<label htmlFor="description">About me</label>
							</p>
							<p>
								<input
									type="text"
									id="description"
									name="description"
									defaultValue={this.context.user.description}
								/>
							</p>
						</div>
						<div>
							<p className="label">
								<label htmlFor="group">My interests</label>
							</p>
							<p>
								<select
									name="group"
									id="group"
									onChange={this.handleChange}
									value={this.context.user.group}
								>
									<option value="cats">Cats</option>
									<option value="dogs">Dogs</option>
									<option value="horses">Horses</option>
									<option value="snakes">Snakes</option>
								</select>
							</p>
						</div>
						<button className="edit-button" className="ui primary button">
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}
export default CurrentUserEditForm;
