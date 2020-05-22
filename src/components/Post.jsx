import React, { Component } from 'react';
// import axios from 'axios';
import '../styles/Post.css';
import AddPost from './Forms/AddPost';
import SinglePost from './SinglePost';
// import LikeButton from './LikeButton';
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
			<div className="ui container">
				<div className="comment">
					<div className="content">
						<AddPost handlePost={this.props.handlePost} posts={this.props.posts} />
					</div>
				</div>
				<div className="ui container">
					<div>
						{/* Reversing the state with a shallow copy first otherwise it acts weird,
                as reverse() directly mutates the array */}
						{[ ...this.props.posts ]
							.reverse()
							.map((post, index) => (
								<SinglePost updatePost={this.props.updatePost} post={post} index={index} key={index} />
							))}
					</div>
				</div>
			</div>
		);
	}
}
export default Post;
