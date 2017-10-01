import {
	ROOT_URL,
	USER_LOGIN,
 	USER_LOGOUT,
 	GET_LOGGED_NAVBAR,
    GET_POSTS,
    GET_CATEGORIES,
    CREATE_CATEGORY
 } from '../constants/ActionTypes'

import axios from 'axios';

/**
 * Sends the login credentials to the reducers
 */
export function userLogin(email, password) {
    return async (dispatch, getState) => {
        let data = await axios({
            headers: { 
                'content-type': 'application/json'
            },
            method: 'post',
            url: `${ROOT_URL}login/login`,
            params: {
                email,
                password
            }
        });
        dispatch(dispatchUserLogin(data));
    };
}

/**
 * Dispatches userLogin to reducers
 */
function dispatchUserLogin(data) {
	return {
		type: USER_LOGIN,
		payload: data
	}
}

/**
 * Sends the logout request to the dispatcher
 */
export function userLogout(id) {
	return async (dispatch, getState) => {
        let data = await axios({
            headers: { 
                'content-type': 'application/json'
            },
            method: 'post',
            url: `${ROOT_URL}login/logout`,
            params: {
                id
            }
        });
        dispatch(dispatchUserLogout(data));
    };
}

/**
 * Dispatches login request to the reducers
 */
function dispatchUserLogout(data) {
	return {
		type: USER_LOGOUT,
		payload: data
	};
}

/**
 * Gets the navbar buttons, when the user is logged in.
 */
export function getLoggedNavbar() {
	return (dispatch) => {
		axios.get(`${ROOT_URL}api/get-logged-navbar`)
			.then((data) => { dispatch(dispatchLoggedNavbar(data)) });
	}
}

/**
 * Dispatches navbar buttons when logged in.
 */
function dispatchLoggedNavbar(data) {
	return {
		type: GET_LOGGED_NAVBAR,
		payload: data
	}
}

/**
 * Fetch all the existing posts from the database.
 */
export function getPosts() {
    return (dispatch) => {
        axios.get(`${ROOT_URL}api/get-posts`)
            .then((data) => { dispatch(dispatchFetchPosts(data)) });
    }
}

/**
 * Dispatch all fetched posts toward the reducers.
 */
function dispatchFetchPosts(data) {
    return {
        type: GET_POSTS,
        payload: data
    };
}

/**
 * Fetch all existing posts from the database.
 */
export function getCategories() {
    return (dispatch) => {
        axios.get(`${ROOT_URL}api/get-categories`)
            .then((data) => { dispatch(dispatchFetchCategories(data)) });
    }
}

/**
 * Dispatches categories towards the reducers
 */
function dispatchFetchCategories(data) {
    return {
        type: GET_CATEGORIES,
        payload: data
    }
}

/**
 * Submits a created category
 */
export function createCategory(values) {
    return async (dispatch, getState) => {
        let data = await axios({
            headers: { 
                'content-type': 'application/json'
            },
            method: 'post',
            url: `${ROOT_URL}api/create-category`,
            params: {
                name: values
            }
        }).then((response) => {
            alert(response.data.data);
            dispatch(dispatchCreateCategory(response.data));
        });
        
    };
}

/**
 * Dispatches the created category towards the reducers
 */
function dispatchCreateCategory(data) {
    return {
        type: CREATE_CATEGORY,
        payload: data
    };
}