import React from 'react';

class LikeButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// numberOfLikes: 0,
			// updated: false
		};
	}

	// updateLikes = () => {

	//   if(!this.state.updated) {
	//     this.setState((prevState, props) => {
	//       return {
	//           numberOfLikes: prevState.numberOfLikes + 1,
	//         updated: true
	//       };
	//     });

	//   } else {

	//     this.setState((prevState, props) => {
	//       return {
	//           numberOfLikes: prevState.numberOfLikes - 1,
	//         updated: false
	//       };
	//     });

	//   }
	// }

	render() {
		return (
			<React.Fragment>
				{/* <div className="ui icon left floated buttons"> */}
				<button className="ui icon left floated right labeled violet button" onClick={this.props.updateLikes}>
					{this.props.number}
					<i aria-hidden="true" className="heart icon" />
				</button>
				{/* </div> */}
			</React.Fragment>
		);
	}
}

// class LikeButton extends Component {
// constructor(props) {
//     super(props);
//     this.state = {
//         numberOfLikes: 0,
//     }
// }

// handleLike = (event) => {
//     const newLikesValue = this.state.numberOfLikes + 1;
//     this.setState({ numberOfLikes: newLikesValue});
// }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleLike}> {this.state.numberOfLikes} Likes</button>
//             </div>
//         )
//     }
// }

export default LikeButton;
