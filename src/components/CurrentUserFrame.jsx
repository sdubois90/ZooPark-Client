import React from 'react';
import CurrentUserInfo from './CurrentUserInfo';
import CurrentUserEditForm from './Forms/CurrentUserEditForm';
import axios from 'axios';

class CurrentUserFrame extends React.Component {
	state = {
		isEditing: false
		// currentUserToEdit: null
	};

	toggleEditForm = (event) => {
		this.setState({ isEditing: true });
	};

	hideEditForm = (event) => {
		this.setState({ isEditing: false });
	};

	render() {
		return (
			<div>
				<div className="ui center aligned container">
					{this.state.isEditing && (
						<CurrentUserEditForm updatePost={this.props.updatePost} hideEditForm={this.hideEditForm} />
					)}
					{!this.state.isEditing && <CurrentUserInfo toggleEditForm={this.toggleEditForm} />}
				</div>
			</div>
		);
	}
}

export default CurrentUserFrame;
