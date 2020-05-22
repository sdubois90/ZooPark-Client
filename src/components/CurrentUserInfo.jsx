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
							src={this.state.currentUser.picture}
							alt="user_pic"
							className="ui medium circular centered image"
							style={{ marginBottom: '1em' }}
						/>
					</div>
					<div role="listitem" className="item">
						<i aria-hidden="true" className="smile outline large icon middle aligned" />
						<div className="content">
							<span className="ui small blue header">NAME</span>
							<span className="description">
								{this.state.currentUser.firstName} {this.state.currentUser.lastName}
							</span>
						</div>
					</div>

					<div role="listitem" className="item">
						<i aria-hidden="true" className="mail large icon middle aligned" />
						<div className="content">
							<span className="ui small blue header">EMAIL</span>
							<span className="description">{this.state.currentUser.email}</span>
						</div>
					</div>
					<div role="listitem" className="item">
						<i aria-hidden="true" className="hand point right outline large icon middle aligned" />
						<div className="content">
							<span className="ui small blue header">ABOUT</span>
							<span className="description">{this.state.currentUser.description}</span>
						</div>
					</div>
					<div role="listitem" className="item">
						<i aria-hidden="true" className="group large icon middle aligned" />
						<div className="content">
							<span className="ui small blue header">MY INTERESTS</span>
							<span className="description">{this.state.currentUser.group}</span>
						</div>
					</div>
					<div role="listitem" className="item">
						<button
							className="ui icon right labeled violet button"
							style={{ marginTop: '0.25em' }}
							onClick={this.handleEdit}
						>
							<i aria-hidden="true" className="edit icon" />
							EDIT MY PROFILE
						</button>
					</div>
				</div>
			</div>
		);
	}
}
export default CurrentUserInfo;
