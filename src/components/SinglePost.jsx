import React, { Component } from 'react'
import "../styles/Post.css";
import LikeButton from "./LikeButton";
import axios from "axios"

export default class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
          numberOfLikes: this.props.post.likes.length,
          liked: false,
        };
      }

    updateLikes = () => {
        if (!this.state.liked) {
          this.setState((prevState, props) => {
            return {
              //numberOfLikes: prevState.numberOfLikes + 1,
              liked: true,
            };
          });
           // axios call to push the current user ID inside 
          axios
          .patch(`http://localhost:4000/api/posts/like/${this.props.post._id}`,{}, {
              withCredentials: true,
          })
          .then((apiResponse) => {
              console.log(apiResponse.data.likes);
              this.setState({numberOfLikes: apiResponse.data.likes.length})
          })
         
        } else {
            this.setState((prevState, props) => {
                return {
                  //numberOfLikes: prevState.numberOfLikes + 1,
                  liked: false,
                };
              });
               // axios call to push the current user ID inside 
              axios
              .patch(`http://localhost:4000/api/posts/dislike/${this.props.post._id}`, {},{
                  withCredentials: true,
              })
              .then((apiResponse) => {
                  console.log(apiResponse.data.likes);
                  this.setState({numberOfLikes: apiResponse.data.likes.length})
              })
        }
    };

    render() {
        return (
            <div>
                <tr className="one-post" key={this.props.index}>
                <td className="content" colSpan="3">
                  <img
                    style={{ display: "block", margin: "0 auto" }}
                    src={this.props.post.picture}
                    alt=""
                    accept="video/*"
                  />
                  <br />
                  {this.props.post.text}
                  <LikeButton
                  
                    number={this.state.numberOfLikes}
                    updateLikes={this.updateLikes}
                  />
                  <br />
                  posted by
                  <i>
                    <b>{this.props.post.user.firstName}</b>
                  </i>
                  <img
                    className="post-user-picture"
                    src={this.props.post.user.picture}
                    alt=""
                  />
                
                </td>
              </tr>
            </div>
        )
    }
}
