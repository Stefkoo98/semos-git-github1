import React, { useEffect, useState } from "react";
import { properties } from "../../config/properties";

export function CommentView(props) {

    const [comment, setComment] = useState({});

    useEffect(() => {
        fetch(`${properties.api.root}/comments/${props.match.params.id}`)
            .then(res => res.json())
            .then(json => setComment(json))
            .catch(err => alert(err))
    }, [])

    return (
        <div id="comment-view">
            <h2>Comment View</h2>
            <p>Name: {comment.name}</p>
            <p>E-mail: {comment.email}</p>
        </div>
    )
}