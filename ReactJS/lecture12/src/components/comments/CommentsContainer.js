import React, { useEffect, useState } from "react";
import { CommentsComponent } from './CommentsComponent';
import { useDispatch, useSelector } from 'react-redux';
import { commentsOperation } from './duck';

export default function CommentsContainer() {

    const comments = useSelector(state => state.commentsReducer.comments);
    const error = useSelector(state => state.commentsReducer.message);
    const [activeEdit, setActiveEdit] = useState(false);
    const [comment, setComment] = useState({})
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(commentsOperation.fetchComments())
    }, [dispatch])

    function deleteComment(id) {
        dispatch(commentsOperation.deleteComment(id));
    }

    function editComment(comment) {
        setComment(comment);
        setActiveEdit(true);
    }

    function saveComment() {
        dispatch(commentsOperation.editComments(comment));
        setActiveEdit(false);
        setComment({})
    }

    return (
        <div id="comments-container">
            {activeEdit &&
                <>
                    <input type="text" value={comment.name} onChange={e => setComment({ ...comment, name: e.target.value })} />
                    <br />
                    <br />
                    <input type="text" value={comment.email} onChange={e => setComment({ ...comment, email: e.target.value })} />
                    <br />
                    <br />
                    <button onClick={saveComment}>Save</button>
                    <button onClick={() => { setActiveEdit(false); setComment({}) }}>&times;</button>
                </>}
            <CommentsComponent
                listOfComments={comments}
                error={error}
                deleteComment={deleteComment}
                editComment={editComment}
            />
        </div>
    )
}

