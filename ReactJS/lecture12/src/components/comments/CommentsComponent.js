import React from "react";
import PropTypes from 'prop-types';

export function CommentsComponent(props) {

    console.log(props)
    return (
        <div id="comments-component">
            {props.error === undefined ? <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>E-mail</th>
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
    error: PropTypes.string
}