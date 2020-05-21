import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UserContext from '../Auth/UserContext';
import apiHandler from '../../api/apiHandler';
import axios from 'axios';
class AddPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			picture: '',
			imagePreview: '',
			videoPreview: '',
			textError: ''
		};
		// USING A REF HERE TO TARGET ANOTHER ELEMENT LIKE A "document.targetElementById" IN VANILLA JS
		this.myFirstRef = React.createRef();
		this.clickFileInput = this.clickFileInput.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		let value;
		if (event.target.type === 'file') {
			value = event.target.files[0];
			// on ajoute le preview de l'image avant submitting
			if (typeof value === 'object') {
				const objectURL = URL.createObjectURL(event.target.files[0]);
				// Check si c'ets une image/qqchose ou video/qqchose, puis remet l'autre type de preview à 0
				if (value && value['type'].split('/')[0] === 'image') {
					this.setState({ imagePreview: objectURL, videoPreview: '' });
				} else {
					this.setState({ videoPreview: objectURL, imagePreview: '' });
				}
			} else {
				// Important to do an "if else" here (at least an "if"), otherwise if we select an image, then open it again and then just cancel instead of choosing an image, it's gonna break
				this.setState({ imagePreview: '' });
			}
		} else {
			value = event.target.value;
		}
		this.setState({ [event.target.name]: value });
	}
	handleSubmit(event) {
		event.preventDefault();
		// apiHandler
		// .createItems(this.state)
		//  .then((apiResponse) => {
		//      console.log("FIRST STEP", apiResponse.data);
		//      this.props.handlePost(apiResponse.data)
		//  })
		//  .catch((apiError) => {
		//      console.log(apiError);
		//  })
		if (!this.state.text) {
			// alert("Required: Please add some text")
			this.setState({ textError: 'Please insert some text' });
		}
		const formData = new FormData();
		formData.append('text', this.state.text);
		formData.append('picture', this.state.picture);
		console.log(this.state);
		console.log(this.props.posts);
		axios
			.post('http://localhost:4000/api/posts/', formData, {
				withCredentials: true
			})
			.then((apiResponse) => {
				// execute a callback and passing it the apiResponse which is the new Post
				console.log('FIRST STEP', apiResponse.data);
				this.props.handlePost(apiResponse.data);
				this.setState({ text: '', picture: '', imagePreview: '', videoPreview: '', textError: '' });
			})
			.catch((apiError) => {
				console.log(apiError.message);
			});
	}
	// Function linked to my ref => triggers it with the target myFirstRef inside
	clickFileInput() {
		// Explicitly clicks the file input using the raw DOM API
		// Note: we're accessing "current" to get the DOM node
		this.myFirstRef.current.click();
	}
	render() {
		return (
			<form onChange={this.handleChange} onSubmit={this.handleSubmit}>
				{/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
				{/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> */}
				<div>
					<span style={{ color: 'red', fontWeight: 'bolder' }}>{this.state.textError}</span>
					<form className="ui form" style={{ marginBottom: '0.5em' }}>
						<textarea
							onChange={this.handleChange}
							name="text"
							value={this.state.text}
							placeholder="Write something..."
							rows="3"
						/>
					</form>

					{/* <textarea
						style={{ width: '50%' }}
						onChange={this.handleChange}
						name="text"
						value={this.state.text}
						placeholder="Write something..."
					/> */}
				</div>
				{/* // tell React that we want to associate the <input> ref
        // with the `textInput` that we created in the constructor */}
				<div>
					{/* <button style={{ display: 'block', width: '120px', height: '30px' }} onClick={this.clickFileInput}>
						Upload
					</button> */}

					<div className="ui icon left floated buttons">
						<button className="ui violet button" onClick={this.clickFileInput}>
							<i aria-hidden="true" className="image icon" />
						</button>

						<button className="ui violet button">
							<i aria-hidden="true" className="video icon" />
						</button>

						<button type="submit" className="ui icon right labeled violet button">
							<i aria-hidden="true" className="world icon" />
							Post
						</button>
					</div>

					<img
						style={{ height: '35px' }}
						src="/images/default_user.png"
						alt=""
						onClick={this.clickFileInput}
					/>
					<input ref={this.myFirstRef} type="file" name="picture" id="getFile" style={{ display: 'none' }} />
					{/* Preview of the image with a guard to display it only if there is an image chosen */}
					{this.state.imagePreview && (
						<p style={{ textAlign: 'center' }}>
							Preview:{' '}
							<img
								className="ui bordered medium rounded centered image"
								// style={{ height: '100px', display: 'block', margin: '0 auto' }}
								src={this.state.imagePreview}
								alt=""
							/>
						</p>
					)}
					{this.state.videoPreview && (
						<p style={{ textAlign: 'center' }}>
							Preview:{' '}
							<video style={{ height: '200px', display: 'block', margin: '0 auto' }} controls>
								<source src={this.state.videoPreview} />
							</video>
						</p>
					)}
				</div>

				{/* <input type="submit" value="Post" /> */}
			</form>
		);
	}
}
export default AddPost;
