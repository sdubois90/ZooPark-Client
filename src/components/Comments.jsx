import React, { Component } from 'react';
import AddComment from './Forms/AddComment';
import axios from 'axios';

export class Comments extends Component {
	render() {
		return (
			<div style={{ marginBottom: '1em' }}>
				{this.props.comments.map((comment, index) => (
					<div className="ui fluid card" style={{ backgroundColor: '#f0fafb' }} key={index}>
						{comment.text}
						<p>posted by {comment.user.firstName}</p>
					</div>
				))}
			</div>
		);
	}
}
export default Comments;
