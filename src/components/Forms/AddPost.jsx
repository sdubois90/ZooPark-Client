import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UserContext from '../Auth/UserContext';
import apiHandler from '../../api/apiHandler';
import axios from "axios";

class AddPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ text: event.target.value });
	}

	handleSubmit(event) {

		// apiHandler
		// .createItems(this.state)
		// 	.then((apiResponse) => {
		// 		console.log(apiResponse.data);
		// 	})
		// 	.catch((apiError) => {
		// 		console.log(apiError);
		// 	})

			axios
			.post("http://localhost:4000/api/posts/" , this.state, {
			  withCredentials: true,
			})
			.then((apiResponse) => {
				console.log(apiResponse.data);
			})
			.catch((apiError) => {
				console.log(apiError.message);
			})
		
		
			// alert('A post was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			
			<form onChange={this.handleChange} onSubmit={this.handleSubmit}>
			<pre>{JSON.stringify(this.state, null , 2)}</pre>
				<div>
					<label>Write Post</label>
					<textarea row="4"  placeholder="Write something..." />
				</div>
				<div>
					<input type="submit" value="Submit" />
				</div>
			</form>
		);
	}
}

export default AddPost;
