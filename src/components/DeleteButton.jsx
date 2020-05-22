import React from 'react';
import axios from 'axios';

class DeleteButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleDelete = (index) => {
		axios
			.delete(`${process.env.REACT_APP_BACKEND_URL}/api/posts/${index}`, { withCredentials: true })
			.then((apiRes) => {
				console.log(apiRes.data);
				this.props.updatePost();
			})
			.catch((apiErr) => {
				console.log(apiErr.message);
			});
	};

	render() {
		return (
			<React.Fragment>
				<button
					type="submit"
					className="ui icon violet button"
					onClick={() => this.handleDelete(this.props.post._id)}
				>
					<i aria-hidden="true" className="delete icon" />
				</button>
			</React.Fragment>
		);
	}
}

export default DeleteButton;
