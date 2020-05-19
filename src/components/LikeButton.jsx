import React from 'react';

class LikeButton extends React.Component {

  constructor(props){

    super(props);
    this.state = {
        numberOfLikes: 0,
        updated: false
    };

  }

  updateLikes = () => {

    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
            numberOfLikes: prevState.numberOfLikes + 1,
          updated: true
        };
      });

    } else {

      this.setState((prevState, props) => {
        return {
            numberOfLikes: prevState.numberOfLikes - 1,
          updated: false
        };
      });

    }
  }

  render(){

    return(
      <div>
        <button onClick={this.updateLikes}>{this.state.numberOfLikes} Likes</button>
      </div>
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

export default LikeButton


