import React from 'react';
import './../../styles/CurrentUserEditForm.css';
import UserContext from '../Auth/UserContext';
import axios from 'axios';

class CurrentUserEditForm extends React.Component {
	static contextType = UserContext;

	state = {
		picture: this.context.user.picture,
		picturePreview: '',
		lastName: this.context.user.lastName,
		firstName: this.context.user.firstName,
		email: this.context.user.email,
		description: this.context.user.description,
		group: 'cats'
		// userInfo:this.context.user,
	};

	handleChange = (event) => {
		let value;
		if (event.target.type === 'file') {
			value = event.target.files[0];
			// Ici on ne peut pas le mettre directement dans le state car c'est un objet comprenant
			// un type, name, size, etc., donc on doit le transformer en URL d'abord afin de pouvoir
			// le lire directement depuis notre bureau => state sans l'avoir dans la base de données
			if (typeof value === 'object') {
				// Check si c'est une image/qqchose ou video/qqchose, puis remet l'autre type de preview à 0
				this.setState({ picturePreview: URL.createObjectURL(value) });
			} else {
				// Important to do an "if else" here (at least an "if"), otherwise if we select an image, then open it again and then just cancel instead of choosing an image, it's gonna break
				this.setState({ picturePreview: '' });
			}
		} else {
			value = event.target.value;
		}
		this.setState({ [event.target.name]: value });
	};

	handleForm = (event) => {
		event.preventDefault();

		const formData = new FormData();
		formData.append('lastName', this.state.lastName);
		formData.append('firstName', this.state.firstName);
		formData.append('email', this.state.email);
		formData.append('description', this.state.description);
		formData.append('group', this.state.group);
		formData.append('picture', this.state.picture);

		axios
			.patch('http://localhost:4000/api/users/' + this.context.user._id, formData, { withCredentials: true })
			.then((apiResult) => {
				console.log('updated user', apiResult);
				this.context.setUser(apiResult.data);
				this.props.hideEditForm();
				this.props.updatePost(apiResult.data);
			})
			.catch((apiError) => {
				console.log(apiError.message);
			});
	};

	render() {
		console.log('THE USER IN CONTEXT', this.context.user);
		return (
			<div className="ui segment">
				<form className="ui small form" onChange={this.handleChange} onSubmit={this.handleForm}>
					{/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
					<div className="wrapper">
						{/* Edit My Info */}
						{!this.state.picturePreview && (
							<img
								className="pic"
								src={this.state.picture}
								alt="user_pic"
								className="ui medium circular centered image"
								style={{ marginBottom: '1em' }}
							/>
						)}
						{this.state.picturePreview && (
							<img
								// className="pic"
								src={this.state.picturePreview}
								alt="user_pic"
								className="ui medium circular centered image"
								style={{ marginBottom: '1em' }}
							/>
						)}
						<label htmlFor="picture" className="ui small blue header">
							PROFILE PICTURE
						</label>
						<input type="file" id="picture" name="picture" />
						<div>
							<p className="label">
								<label htmlFor="firstName" className="ui small blue header">
									FIRST NAME
								</label>
							</p>
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
								<label htmlFor="lastName" className="ui small blue header">
									LAST NAME
								</label>
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
								<label htmlFor="email" className="ui small blue header">
									EMAIL
								</label>
							</p>
							<p>
								<input type="text" id="email" name="email" defaultValue={this.context.user.email} />
							</p>
						</div>
						<div>
							<p className="label">
								<label htmlFor="description" className="ui small blue header">
									ABOUT ME
								</label>
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
								<label htmlFor="group" className="ui small blue header">
									MY INTERESTS
								</label>
							</p>
							<p>
								<select
									name="group"
									id="group"
									// onChange={this.handleChange}
									defaultValue={this.context.user.group}
								>
									<option value="cats">Cats</option>
									<option value="dogs">Dogs</option>
									<option value="horses">Horses</option>
									<option value="snakes">Snakes</option>
								</select>
							</p>
						</div>
						<button className="ui violet world icon right labeled button" style={{ marginTop: '1em' }}>
							SUBMIT
							<i aria-hidden="true" className="right world icon" />
						</button>
					</div>
				</form>
			</div>
		);
	}
}
export default CurrentUserEditForm;
