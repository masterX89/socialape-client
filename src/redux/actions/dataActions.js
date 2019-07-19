import {
    SET_SCREAMS,
    POST_SCREAM,
    LOADING_DATA,
    LIKE_SCREAM,
    UNLIKE_SCREAM,
    DELETE_SCREAM,
    LOADING_UI,
    SET_ERRORS, CLEAR_ERRORS
} from "../types";
import axios from "axios";
import {FIREBASE_CORE_HOST} from "../../constants/Constants";

export const getScreams = () => (dispatch) => {
    dispatch({type: LOADING_DATA});
    axios.get(`${FIREBASE_CORE_HOST}/screams`)
        .then(res => {
            dispatch({
                type: SET_SCREAMS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: SET_SCREAMS,
                payload: []
            });
        })
};

export const postScream = (newScream) => (dispatch) => {
    dispatch({type: LOADING_UI});
    axios.post(`${FIREBASE_CORE_HOST}/scream`, newScream)
        .then((res) => {
            dispatch({
                type: POST_SCREAM,
                payload: res.data
            });
            dispatch({
                type: CLEAR_ERRORS
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
};

export const likeScream = (screamId) => (dispatch) => {
    axios.get(`${FIREBASE_CORE_HOST}/scream/${screamId}/like`)
        .then(res => {
            dispatch({
                type: LIKE_SCREAM,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
        })
};

export const unlikeScream = (screamId) => (dispatch) => {
    axios.get(`${FIREBASE_CORE_HOST}/scream/${screamId}/unlike`)
        .then(res => {
            dispatch({
                type: UNLIKE_SCREAM,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
        })
};

export const deleteScream = (screamId) => (dispatch) => {
    axios.delete(`${FIREBASE_CORE_HOST}/scream/${screamId}`)
        .then(() => {
            dispatch({
                type: DELETE_SCREAM,
                payload: screamId
            })
        })
        .catch(err => {
            console.log(err);
        })
};

export const clearErrors = () => (dispatch) => {
    dispatch({type: CLEAR_ERRORS})
};
