import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Post.css';
import AddPost from './Forms/AddPost';
import SinglePost from './SinglePost';

import LikeButton from './LikeButton';

class Post extends Component {
	//   componentDidMount() {

	//     axios
	//     .get("http://localhost:4000/api/posts/", {
	//       withCredentials: true,
	//     })
	//     .then((apiResponse) => {
	//         console.log(apiResponse);
	//         this.setState({ posts: apiResponse.data});
	//     })
	//     .catch((apiError) => {
	//         console.log(apiError);
	//     })
	// }

	render() {
		return (
			<div style={{ width: '100%', padding: '15px' }}>
				<AddPost handlePost={this.props.handlePost} posts={this.props.posts} />
				<table
					style={{
						borderCollapse: 'separate',
						borderSpacing: '15px 15px',
						width: '100%'
					}}
				>
					<tbody>
						{/* Reversing the state with a shallow copy first otherwise it acts weird,
                as reverse() directly mutates the array */}
						{[ ...this.props.posts ]
							.reverse()
							.map((post, index) => <SinglePost post={post} index={index} key={index} />)}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Post;
