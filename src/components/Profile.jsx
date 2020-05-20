import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { withUser } from "../components/Auth/withUser";


class Profile extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentUser: [],
        };  
    }
    
    componentDidMount() {
        console.log(this.props)
        axios
            .get(`http://localhost:4000/api/users/${this.state.currentUser.id}`, {withCredentials: true})
            .then((apiResponse) => {
                console.log(apiResponse);
                this.setState({ currentUser: apiResponse.data });
            })
            .catch((apiError) => {
                console.log(apiError);
            })
    }

    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
                <p>{this.state.currentUser._id}</p>
                <p>{this.state.currentUser.firstName}</p>
                <p>{this.state.currentUser.lastName}</p>
                <p>{this.state.currentUser.email}</p>
            </div>
        )
    }
}

export default withUser(withRouter(Profile));
