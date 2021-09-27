import { FETCH_COMMENTS_FAIL, FETCH_COMMENTS_SUCCESS } from './../constants/CommentsConstants';

export const fetchCommentsSuccess = (comments) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const fetchCommentsFail = (error) => {
    return {
        type: FETCH_COMMENTS_FAIL,
        payload: error
    }
}

export const fetchCommentsRequest = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/comments') // pravam povik do url so podatoci
            .then(res => res.json())
            .then(json => dispatch(fetchCommentsSuccess(json))) // ako e povikot uspesen ni sodrzi Array(500) - nizata na komentari
            .catch(err => dispatch(fetchCommentsFail(err))) // ako e povikot neuspesen predavame error na akcijata
    }
}