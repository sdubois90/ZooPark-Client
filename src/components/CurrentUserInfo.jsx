import React, { Component } from 'react';
import axios from 'axios';
import '../styles/CurrentUserInfo.css';

class CurrentUserInfo extends Component {
	state = {
		currentUser: ''
	};

	componentDidMount() {
		axios
			.get('http://localhost:4000/api/users/' + this.state.id, {
				withCredentials: true
			})
			.then((apiResponse) => {
				console.log(apiResponse);
				this.setState({ currentUser: apiResponse.data });
			})
			.catch((apiError) => {
				console.log(apiError);
			});
	}
	handleEdit = (event) => {
		this.props.toggleEditForm();
	};

	render() {
		return (
			<div className="ui segment">
				<div role="list" className="ui divided relaxed list">
					<div>
						<img
							src="/images/profile-image.jpg"
							alt="user_pic"
							className="ui medium rounded centered image"
						/>
					</div>
					<div role="listitem" className="item">
						<i aria-hidden="true" className="smile outline large icon middle aligned" />
						<div className="content">
							<a className="header">NAME</a>
							<a className="description">
								{' '}
								{this.state.currentUser.firstName} {this.state.currentUser.lastName}
							</a>
						</div>
					</div>

					<div role="listitem" className="item">
						<i aria-hidden="true" className="mail large icon middle aligned" />
						<div className="content">
							<a className="header">EMAIL</a>
							<a className="description">{this.state.currentUser.email}</a>
						</div>
					</div>
					<div role="listitem" className="item">
						<i aria-hidden="true" className="hand point right outline large icon middle aligned" />
						<div className="content">
							<a className="header">ABOUT</a>
							<a className="description">{this.state.currentUser.description}</a>
						</div>
					</div>
					<div role="listitem" className="item">
						<i aria-hidden="true" className="group large icon middle aligned" />
						<div className="content">
							<a className="header">MY INTERESTS</a>
							<a className="description">{this.state.currentUser.group}</a>
						</div>
					</div>
					<div role="listitem" className="item">
						<button className="ui icon right labeled violet button" onClick={this.handleEdit}>
							<i aria-hidden="true" className="edit icon" />
							Edit my profile
						</button>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className="wrapper">
				<table className="userinfo">
					<tbody>
						<tr>
							<td className="pic">
								<img src={this.state.currentUser.picture} alt="user_pic" />
							</td>
						</tr>
						<tr>
							<td className="label">
								<h3>Name</h3>
							</td>
						</tr>
						<tr>
							<td className="contact-details">
								<h2>
									{this.state.currentUser.firstName} {this.state.currentUser.lastName}
								</h2>
							</td>
						</tr>
						<tr>
							<td className="label">
								<h3>Email</h3>
							</td>
						</tr>
						<tr>
							<td className="email">{this.state.currentUser.email}</td>
						</tr>
						<tr>
							<td className="label">
								<h3>About me</h3>
							</td>
						</tr>
						<tr>
							<td className="about">{this.state.currentUser.description}</td>
						</tr>
						<tr>
							<td className="label">
								<h3>My interests</h3>
							</td>
						</tr>
						<tr>
							<td className="interests">{this.state.currentUser.group}</td>
						</tr>
						<tr>
							<td>
								<button className="edit-button" onClick={this.handleEdit}>
									Edit my profile
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
export default CurrentUserInfo;
