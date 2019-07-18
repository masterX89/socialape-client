import {SET_SCREAMS, LOADING_DATA, LIKE_SCREAM, UNLIKE_SCREAM} from "../types";
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

export const likeScream = (screamId) => (dispatch) => {
    axios.get(`${FIREBASE_CORE_HOST}/${screamId}/like`)
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
    axios.get(`${FIREBASE_CORE_HOST}/${screamId}/unlike`)
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
