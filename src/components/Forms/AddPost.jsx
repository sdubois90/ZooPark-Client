import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UserContext from '../Auth/UserContext';
import apiHandler from '../../api/apiHandler';

class AddPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Write something...'
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		alert('An post was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Write Post</label>
					<textarea value={this.state.value} onChange={this.handleChange} />
				</div>
				<div>
					<input type="submit" value="Submit" />
				</div>
			</form>
		);
	}
}

export default AddPost;
