import React, { useEffect } from "react";
import { CommentsComponent } from './CommentsComponent';
import { useDispatch, useSelector } from 'react-redux';
import { commentsOperation } from './duck';

export default function CommentsContainer() {

    const comments = useSelector(state => state.commentsReducer.comments);
    const error = useSelector(state => state.commentsReducer.message);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(commentsOperation.fetchComments())
    }, [dispatch])


    return (
        <div id="comments-container">
            <CommentsComponent listOfComments={comments} error={error} />
        </div>
    )
}

