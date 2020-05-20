import React from "react";
import axios from "axios";

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleDelete = (index) => {
        axios.delete(`http://localhost:4000/api/posts/${index}`, { withCredentials: true })
            .then((apiRes) => {
                console.log(apiRes.data)
                this.props.updatePost();
            })
            .catch((apiErr) => {
                console.log(apiErr.message)
            })
    }


    render() {
        return (
            <React.Fragment>
                    <button onClick={() => this.handleDelete(this.props.post._id)}>Don't abandon me!</button>
            </React.Fragment>
        )
    }
}

export default DeleteButton