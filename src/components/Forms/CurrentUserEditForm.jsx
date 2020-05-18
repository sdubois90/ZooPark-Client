import React from "react";
import "./../../styles/CurrentUserEditForm.css";

class CurrentUserEditForm extends React.Component {
  handleChange = (event) => {
    console.log(event.target.name);
  };
  handleForm = (event) => {
    event.preventDefault();
    console.log("I am clicked");
  };
  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleForm}>
        <div className="wrapper">
          <img className="pic" src="" alt="user_pic" />

          <div>
            <p className="label">
              <label htmlFor="firstName">First name</label>
            </p>
            <p>
              <input
                type="text"
                id="firstName"
                name="firstName"
                // value={this.props.currentUser.firstName}
              ></input>
            </p>
          </div>

          <div>
            <p className="label">
              <label htmlFor="lastName">Last name</label>
            </p>
            <p>
              <input
                type="text"
                id="lastName"
                name="lastName"
                // value={this.props.currentUser.lastName}
                ></input>
            </p>
          </div>

          <div>
            <p className="label">
              <label htmlFor="email">Email</label>
            </p>
            <p>
              <input
                type="text"
                id="email"
                name="email"
                // value={this.props.currentUser.email}
                ></input>
            </p>
          </div>

          <div>
            <p className="label">
              <label htmlFor="description">About me</label>
            </p>
            <p>
              <input
                type="text"
                id="description"
                name="description"
                // value={this.props.currentUser.description}
                ></input>
            </p>
          </div>

          <div>
            <p className="label">
              <label htmlFor="group">My interests</label>
            </p>
            <p>
              <select id="group" name="group">
                <option value="cats">Cats</option>
                <option value="dogs">Dogs</option>
                <option value="horses">Horses</option>
                <option value="snakes">Snakes</option>
              </select>
            </p>
          </div>

          <button className="edit-button">Submit</button>
        </div>
      </form>
    );
  }
}
export default CurrentUserEditForm;

// import React, { Component } from 'react';
// import axios from "axios";

// export class CurrentUserEditForm extends Component {
//     state = {
//         picture: this.props.currentUser.picture,
//         firstName: this.props.currentUser.firstName,
//         lastName: this.props.currentUser.lastName,
//         email: this.props.currentUser.email,
//         description: this.props.currentUser.description,
//         group: this.props.currentUser.group,
//         id: this.props.currentUser._id,
//     };

//     handleChange = (event) => {
//         this.setState({ [event.target.name]: event.tarbget.value});
//     }

//     handleForm = (event) => {
//         event.prevenDefault();

// axios
// .patch("http://localhost:4000/api/users/" + this.state.id, {
//         withCredentials: true,
//         picture: this.state.picture,
//         firstName: this.state.firstName,
//         lastName: this.state.lastName,
//         email: this.state.email,
//         description: this.state.description,
//         group: this.state.group,
//       })
//       .then((apiResponse) => {
//         console.log(apiResponse.data);
//         this.props.updateCurrentUser(apiResponse.data);

//       })
//       .catch((apiError) => {
//         console.log(apiError.response.data.message);
//       });
//   };

//     render() {

//         return (

// <form onChange={this.handleChange} onSubmit={this.handleForm}>

//     <div className="wrapper">
//     <label htmlFor="firstName">First Name</label>
//     <input
//     type="firstName"
//     id="firstName"
//     name="firstName"
//     defaultValue={this.props.currentUser.firstName}
//     />
//     </div>

// <div>
// <label htmlFor="lastName">Last Name</label>
//     <input
//     type="lastName"
//     id="lastName"
//     name="lastName"
//     defaultValue={this.props.currentUser.lastName}
//     />
// </div>

// <div>
// <label htmlFor="email">Email</label>
//     <input
//     type="email"
//     id="email"
//     name="email"
//     defaultValue={this.props.currentUser.email}
//     />
// </div>

// <div>
// <label htmlFor="description">Email</label>
//     <input
//     type="description"
//     id="description"
//     name="description"
//     defaultValue={this.props.currentUser.description}
//     />
// </div>

// <div>
// <label htmlFor="group">Email</label>

// <select
//     name="group"
//     id="group"
//     type="group"
//     onChange={this.handleChange}
//     value={this.props.currentUser.group}
//     >
//     <option value="cats">Cats</option>
//     <option value="dogs">Dogs</option>
//     <option value="horses">Horses</option>
//     <option value="snakes">Snakes</option>
// </select>
// </div>

// <button>Edit my profile</button>
// </form>

//         )
//     }
// }

// export default CurrentUserEditForm
