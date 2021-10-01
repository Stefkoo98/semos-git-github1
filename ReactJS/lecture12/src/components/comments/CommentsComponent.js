import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export function CommentsComponent(props) {

    console.log(props)
    return (
        <div id="comments-component">
            {props.error === undefined ? <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listOfComments.map(comment => {
                        return (
                            <tr key={comment.id} >
                                <td>
                                    {comment.name}
                                </td>
                                <td>
                                    {comment.email}
                                </td>
                                <td>
                                    <button onClick={() => props.editComment(comment)}>Edit</button>
                                    <button onClick={() => props.deleteComment(comment.id)}>Delete</button>
                                    <Link to={`/comment/${comment.id}`}><button>Go to Comments</button></Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> : props.error}
        </div>
    )
}

CommentsComponent.propTypes = {
    listOfComments: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.string,
    deleteComment: PropTypes.func,
    editComment: PropTypes.func
}