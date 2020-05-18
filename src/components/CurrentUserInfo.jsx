import React, { Component } from "react";
import axios from "axios";
import "../styles/CurrentUserInfo.css";

class CurrentUserInfo extends Component {
  state = {
    currentUser: "",
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/users/" + this.state.id, {
        withCredentials: true,
      })
      .then((apiResponse) => {
        console.log(apiResponse);
        this.setState({ currentUser: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });

      
      }
      handleEdit = (event) => {
        this.props.toggleEditForm()
  }
  
  render() {
    return (
      <div className="wrapper">
        <table className="userinfo">
          <tr>
            <td className="pic">
              <img src={this.state.currentUser.picture} alt="user_pic" />
            </td>
          </tr>
          <tr>
            <td className="label">
            <h3>Name</h3>
            </td>
          </tr>
          <tr>
            <td className="contact-details">
              <h2>
                {this.state.currentUser.firstName} {this.state.currentUser.lastName}
              </h2>
            </td>
          </tr>
          <tr>
          <td className="label">
            <h3>Email</h3>
            </td>
          </tr>
          <tr>
            <td className="email">{this.state.currentUser.email}</td>
          </tr>
          <tr>
          <td className="label">
              <h3>About me</h3>
            </td>
          </tr>
          <tr>
            <td className="about">Blah blah blah{this.state.currentUser.description}</td>
          </tr>
          <tr>
          <td className="label">
              <h3>My interests</h3>
            </td>
          </tr>
          <tr >
            <td className="interests">Cats{this.state.currentUser.group}</td>
          </tr>
          <tr>
            <td>
              <button className="edit-button" onClick={this.handleEdit}>
                Edit my profile
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default CurrentUserInfo;
