import React from "react";
import "./../../styles/CurrentUserEditForm.css";
import UserContext from "../Auth/UserContext";
import axios from 'axios';

class CurrentUserEditForm extends React.Component {

  static contextType = UserContext;

  state = {
    picture:this.context.user.picture,
    lastName:this.context.user.lastName,
    firstName:this.context.user.firstName,
    email:this.context.user.email,
    description:this.context.user.description,
    group:"cats",
    // userInfo:this.context.user,
  }

  handleChange = (event) => {
    let value;
    if (event.target.type === "file") {
      value = event.target.files[0];
      this.setState({picture: value});
      console.log(this.state.picture)
    } else {
      value = event.target.value;
    }
    console.log(event.target.name);
    this.setState({ [event.target.name]: value });
  };


  handleForm = (event) => {
    event.preventDefault();

    const formData = new FormData();
		formData.append("lastName", this.state.lastName);
    formData.append("firstName", this.state.firstName);
    formData.append("email", this.state.email);
    formData.append("description", this.state.description);
    formData.append("group", this.state.group);
    formData.append("picture", this.state.picture);

    axios.patch('http://localhost:4000/api/users/' + this.context.user._id, formData, {withCredentials:true})
    .then((apiResult) => {
      console.log("updated user",apiResult);
      // this.context.setUser(apiResult.data)
      this.props.hideEditForm();
      this.props.updatePost(apiResult.data);
    })
    .catch((apiError) => {
      console.log(apiError)
    });
  };


  render() {
    console.log("THE USER IN CONTEXT", this.context.user)
    return (
      <form onChange={this.handleChange} onSubmit={this.handleForm}>
      <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <div className="wrapper">Edit My Info
          <img className="pic" src={this.state.picture} alt="user_pic" />
          <label htmlFor="picture">Profile picture</label>
				<input type="file" id="picture" name="picture" />
          <div>
            <p className="label">
              <label htmlFor="firstName">First name</label>
            </p>
            <p>
              <input
                type="text"
                id="firstName"
                name="firstName"
                defaultValue={this.context.user.firstName}
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
                defaultValue={this.context.user.lastName}
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
                defaultValue={this.context.user.email}
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
                defaultValue={this.context.user.description}
                ></input>
            </p>
          </div>

          <div>
            <p className="label">
              <label htmlFor="group">My interests</label>
            </p>
            <p>
              <select 
              name="group"
              id="group" 
              // onChange={this.handleChange}
              defaultValue={this.context.user.group}
              >
              
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