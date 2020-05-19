import React, { Component } from 'react'

class AddCommentButton extends Component {

    state = {
        isCommenting: false
    }


    showAddCommentForm = (event) => {
        this.setState({ isCommenting: true})
    }

    hideAddCommentForm = (event) => {
        this.setState({ isCommenting: false});
    }

    render() {
        return (
            <div>

            <button onClick={showAddCommentForm}>Comment</button>
                
            </div>
        )
    }
}

export default AddCommentButton
