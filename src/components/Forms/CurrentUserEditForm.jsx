import React from 'react';
import './../../styles/CurrentUserEditForm.css';
import UserContext from '../Auth/UserContext';
import axios from 'axios';

class CurrentUserEditForm extends React.Component {
	static contextType = UserContext;

  state = {
    picture: this.context.user.picture,
    picturePreview: "",
    lastName: this.context.user.lastName,
    firstName: this.context.user.firstName,
    email: this.context.user.email,
    description: this.context.user.description,
    group: "cats",
    // userInfo:this.context.user,
  }

  handleChange = (event) => {
    let value;
    if (event.target.type === "file") {
      value = event.target.files[0];
      // Ici on ne peut pas le mettre directement dans le state car c'est un objet comprenant
      // un type, name, size, etc., donc on doit le transformer en URL d'abord afin de pouvoir
      // le lire directement depuis notre bureau => state sans l'avoir dans la base de données
      if (typeof value === 'object') {
        // Check si c'est une image/qqchose ou video/qqchose, puis remet l'autre type de preview à 0
        this.setState({ picturePreview: URL.createObjectURL(value) })
      } else {
        // Important to do an "if else" here (at least an "if"), otherwise if we select an image, then open it again and then just cancel instead of choosing an image, it's gonna break
        this.setState({ picturePreview: "" })
      }

    } else {
      value = event.target.value;
    }
    this.setState({ [event.target.name]: value });
  };

	// render() {
	// 	console.log('THE USER IN CONTEXT', this.context.user);
	// 	return (
	// 		<div className="ui segment">
	// 			<form className="" onChange={this.handleChange} onSubmit={this.handleForm}>
	// 				<div className="wrapper">
	// 					Edit My Info
	// 					<img className="pic" src="/media/plant.svg" alt="user_pic" />
	// 					<div>
	// 						{/* <p className="label"> */}
	// 						<div class="field">
	// 							<label htmlFor="firstName">First name</label>
	// 						</div>
	// 						{/* </p> */}
	// 						<p>
	// 							<input
	// 								type="text"
	// 								id="firstName"
	// 								name="firstName"
	// 								defaultValue={this.context.user.firstName}
	// 							/>
	// 						</p>
	// 					</div>
	// 					<div>
	// 						<p className="label">
	// 							<label htmlFor="lastName">Last name</label>
	// 						</p>
	// 						<p>
	// 							<input
	// 								type="text"
	// 								id="lastName"
	// 								name="lastName"
	// 								defaultValue={this.context.user.lastName}
	// 							/>
	// 						</p>
	// 					</div>
	// 					<div>
	// 						<p className="label">
	// 							<label htmlFor="email">Email</label>
	// 						</p>
	// 						<p>
	// 							<input type="text" id="email" name="email" defaultValue={this.context.user.email} />
	// 						</p>
	// 					</div>
	// 					<div>
	// 						<p className="label">
	// 							<label htmlFor="description">About me</label>
	// 						</p>
	// 						<p>
	// 							<input
	// 								type="text"
	// 								id="description"
	// 								name="description"
	// 								defaultValue={this.context.user.description}
	// 							/>
	// 						</p>
	// 					</div>
	// 					<div>
	// 						<p className="label">
	// 							<label htmlFor="group">My interests</label>
	// 						</p>
	// 						<p>
	// 							<select
	// 								name="group"
	// 								id="group"
	// 								onChange={this.handleChange}
	// 								value={this.context.user.group}
	// 							>
	// 								<option value="cats">Cats</option>
	// 								<option value="dogs">Dogs</option>
	// 								<option value="horses">Horses</option>
	// 								<option value="snakes">Snakes</option>
	// 							</select>
	// 						</p>
	// 					</div>
	// 					<button className="edit-button" className="ui primary button">
	// 						Submit
	// 					</button>
	// 				</div>
	// 			</form>
	// 		</div>
	// 	);
	// }
	handleForm = (event) => {
		event.preventDefault();

		const formData = new FormData();
		formData.append('lastName', this.state.lastName);
		formData.append('firstName', this.state.firstName);
		formData.append('email', this.state.email);
		formData.append('description', this.state.description);
		formData.append('group', this.state.group);
    formData.append('picture', this.state.picture);
    
    // this.context.user.picture = this.state.picturePreview
    // this.context.user.lastName = this.state.lastName
    // this.context.user.firstName = this.state.firstName
    // this.context.user.email = this.state.email
    // this.context.user.description = this.state.description

    axios.patch('http://localhost:4000/api/users/' + this.context.user._id, formData, { withCredentials: true })
      .then((apiResult) => {
        console.log("updated user", apiResult);
        this.context.setUser(apiResult.data)
        this.props.hideEditForm();
        this.props.updatePost(apiResult.data);
      })
      .catch((apiError) => {
        console.log(apiError.message)
      });
  };


  render() {
    console.log("THE USER IN CONTEXT", this.context.user)
    return (
      <form onChange={this.handleChange} onSubmit={this.handleForm}>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
        <div className="wrapper">Edit My Info

          {!this.state.picturePreview && <img className="pic" src={this.state.picture} alt="user_pic" />}
          {this.state.picturePreview && <img className="pic" src={this.state.picturePreview} alt="user_pic" />}
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
