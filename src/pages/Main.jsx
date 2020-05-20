import React from 'react';
import Post from '../components/Post';
import User from '../components/User';
import AddPost from '../components/Forms/AddPost';
import CurrentUserInfo from '../components/CurrentUserInfo.jsx';
import '../styles/Main.css';
import axios from 'axios';
import CurrentUserFrame from '../components/CurrentUserFrame';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		}
	};




	componentDidMount() {
		axios
			.get('http://localhost:4000/api/posts', {
				withCredentials: true
			})
			.then((apiResponse) => {
				console.log(apiResponse);
				// NOT WORKING, see on "Post.jsx" for the answer = >Reverse the order of the posts when first loading the page
				// const rev = apiResponse.data.reverse()
				// this.setState({ posts: rev });
				this.setState({ posts: apiResponse.data });
			})
			.catch((apiError) => {
				console.log(apiError);
			});
		//   apiHandler
		//     .getItems()
		//     .then((apiResponse) => {
		//       console.log(apiResponse.data)
		//       this.setState({ posts: apiResponse.data })
		//     })
		//     .catch((apiError) => {
		//       console.log(apiError)
		//     })
	}

	// updatePost = (updatedUser) => {
	// 	const updatedUsers = this.state.posts.map(post => {
	// 		if (post.user._id === updatedUser._id) {
	//post.user.firstName = updatedUser.firstName
	// 			return post
	// 		} else {
	// 			return post
	// 		}
	// 	})

	// 	this.setState({ posts: updatedUsers });

	updatePost = () => {
		axios
			.get('http://localhost:4000/api/posts', {
				withCredentials: true
			})
			.then((apiResponse) => {
				console.log(apiResponse);
				this.setState({ posts: apiResponse.data });
			})
			.catch((apiError) => {
				console.log(apiError);
			});
	};
	// the corresponding method which will take an argument that corresponds to the value of the new post
	// this method will set the state

	handlePost = (responseFromAddPost) => {
		console.log('SECOND STEP');
		// NOT WORKING, see on "Post.jsx" for the answer => Reverse the order of the posts when posting
		// let arr = [...this.state.posts].reverse()
		// let newElement = responseFromAddPost;
		// arr.shift(newElement)
		this.setState({ posts: [...this.state.posts, responseFromAddPost] });
	};

	render() {
		return (
			<div className="main-container">
				<div className="profile">
					<h2>Current user info</h2>
					<CurrentUserFrame updatePost={this.updatePost} />
				</div>

				<div className="mainfeed">
					<h2>Main Feed</h2>
					<Post
						handlePost={this.handlePost}
						posts={this.state.posts}
						updatePost={this.updatePost} />
				</div>

				<div className="group-members">

					<h2>Group Members</h2>

					<User />
				</div>
			</div>
		);
	}
}

export default Main;
