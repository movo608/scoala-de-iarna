import axios from 'axios'

import {
	ROOT_URL,
	USER_LOGIN,
 	USER_LOGOUT,
 	GET_LOGGED_NAVBAR,
    GET_POSTS,
    GET_CATEGORIES,
    CREATE_CATEGORY,
    CREATE_POST,
    USER_STORE_LOGIN,
    SEND_FORM,
    GET_WORKSHOPS,
    CREATE_WORKSHOP,
    GET_SUBMISSIONS,
    GET_CONTRIBUTORS,
    GET_SPONSORS,
    CREATE_CONTRIBUTOR,
    CREATE_SPONSOR
} from '../constants/ActionTypes'

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
 * Sends the login request based on localstore
 */
export function userStoreLogin(email) {
    return async (dispatch, getState) => {
        let data = await axios({
            headers: {
                'content-type': 'application/json'
            },
            method: 'post',
            url: `${ROOT_URL}login/store-login`,
            params: {
                email
            }
        });
        dispatch(dispatchUserStoreLogin(data));
    };
}

/**
 * Dispatches user login based on store towards reducers
 */
function dispatchUserStoreLogin(data) {
    return {
        type: USER_STORE_LOGIN,
        payload: data
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
        await axios({
            headers: { 
                'content-type': 'application/json'
            },
            method: 'post',
            url: `${ROOT_URL}api/create-category`,
            params: {
                name: values
            }
        }).then((response) => {
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

/**
 * Deletes an entry from the database
 */
export function deleteCategory(id) {
    return async (dispatch, getState) => {
        await axios({
            headers: { 
                'content-type': 'application/json'
            },
            method: 'post',
            url: `${ROOT_URL}api/delete-category`,
            params: {
                id
            }
        });
    };  
}

/**
 * Submits a created post
 */
export function createPost(name, body, category_id, category_name) {
    return async (dispatch, getState) => {
        let data = await axios({
            headers: { 
                'content-type': 'application/json'
            },
            method: 'post',
            url: `${ROOT_URL}api/create-post`,
            params: {
                name,
                body,
                category_id,
                category_name
            }
        });
        dispatch(dispatchCreatePost(data));
    };
}

/**
 * Dispatches the created post towards the reducers
 */
function dispatchCreatePost(data) {
    return {
        type: CREATE_POST,
        payload: data
    };
}

/**
 * Submits the deletion of a post
 */
export function deletePost(id) {
    return async (dispatch, getState) => {
        await axios({
            headers: { 
                'content-type': 'application/json'
            },
            method: 'post',
            url: `${ROOT_URL}api/delete-post`,
            params: {
                id
            }
        });
    };  
}

/**
 * Submits the completed form
 */
export function sendForm({...values}) {
    return async (dispatch, getState) => {
        let data = await axios({
            headers: { 
                'content-type': 'application/json'
            },
            method: 'post',
            url: `${ROOT_URL}api/submit-form`,
            params: {
                name: values.name,
                email: values.email,
                city: values.city,
                region: values.region,
                workshop: values.workshop
            }
        });
        dispatch(dispatchSendForm(data));
    };
}

/**
 * Dispatches the sent form to the reducers
 */
function dispatchSendForm(data) {
    return {
        type: SEND_FORM,
        payload: data
    };
}

/**
 *  Fetches workshops from the database
 */
export function getWorkshops() {
    return (dispatch) => {
		axios.get(`${ROOT_URL}api/get-workshops`)
			.then((data) => { dispatch(dispatchGetWorkshops(data)) });
	};
}

/**
 * Dispatches the fetched workshops towards the reducers
 */
function dispatchGetWorkshops(data) {
    return {
        type: GET_WORKSHOPS,
        payload: data
    }
}

/**
 * Deletes a workshop from the database
 */
export function deleteWorkshop(id) {
    return async (dispatch, getState) => {
        await axios({
            method: 'post',
            url: `${ROOT_URL}api/delete-workshop`,
            params: {
                id
            }
        });
    }
}

/**
 * Creates a workshop in the database
 */
export function createWorkshop(name) {
    return async (dispatch, getState) => {
        await axios({
            method: 'post',
            url: `${ROOT_URL}api/create-workshop`,
            params: {
                name
            }
        }).then((response) => dispatch(dispatchCreateWorkshop(response)));
    }
}

/**
 * Dispatches the created workshop towards the reducers
 */
function dispatchCreateWorkshop(data) {
    return {
        type: CREATE_WORKSHOP,
        payload: data
    };
}

/**
 * Gets the submissions from the database
 */
export function getSubmissions() {
    return (dispatch) => {
        axios.get(`${ROOT_URL}api/get-submissions`)
            .then((data) => dispatch(dispatchGetSubmissions(data)));
    }
}

/**
 * Dispatches fetched submissions towards the reducers
 */
function dispatchGetSubmissions(data) {
    return {
        type: GET_SUBMISSIONS,
        payload: data
    };
}

/**
 * Deletes a form submission from the database
 */
export function deleteSubmission(id) {
    return async (dispatch, getState) => {
        await axios({
            method: 'post',
            url: `${ROOT_URL}api/delete-submission`,
            params: {
                id
            }
        });
    }
}

/**
 * Fetches the contributors from the database
 */
export function getContributors() {
    return (dispatch) => {
        axios.get(`${ROOT_URL}api/get-contributors`)
            .then((data) => dispatch(dispatchGetContributors(data)));
    }
}

/**
 * Dispatches contributors towards the reducers
 */
function dispatchGetContributors(data) {
    return {
        type: GET_CONTRIBUTORS,
        payload: data
    };
}

/**
 * Fetches the sponsors from the database
 */
export function getSponsors() {
    return (dispatch) => {
        axios.get(`${ROOT_URL}api/get-sponsors`)
            .then((data) => dispatch(dispatchGetSponsors(data)));
    }
}

/**
 * Dispatches sponsors towards the reducers
 */
function dispatchGetSponsors(data) {
    return {
        type: GET_SPONSORS,
        payload: data
    };
}

/**
 * Creates a contributor entry in the database
 */
export function createContributor(values) {
    return async (dispatch, getState) => {
        await axios({
            url: `${ROOT_URL}api/create-contributor`,
            method: 'post',
            params: {
                name: values.name
            }
        }).then((response) => dispatch(dispatchCreateContributor(response)));
    };
}
/**
 * Dispatches the created contributor towards the reducers
 */
function dispatchCreateContributor(data) {
    return {
        type: CREATE_CONTRIBUTOR,
        payload: data
    };
}

/**
 * Deletes a contributor from the database
 */
export function deleteContributor(id) {
    return async (dispatch, getState) => {
        await axios({
            url: `${ROOT_URL}api/delete-contributor`,
            method: 'post',
            params: {
                id
            }
        });
    }
}

/**
 * Creates a sponsor entry in the database
 */
export function createSponsor(values) {
    return async (dispatch, getState) => {
        await axios({
            url: `${ROOT_URL}api/create-sponsor`,
            method: 'post',
            data: {
                name: values.name,
                images: values.images
            }
        })//.then((response) => dispatch(dispatchCreateSponsor(response)));
        .then((response) => console.log(response))
    }
}

/**
 * Dispatches the created sponsor towards the reducers
 */
function dispatchCreateSponsor(data) {
    return {
        type: CREATE_SPONSOR,
        payload: data
    }
}

/**
 * Deletes a sponsor from the database
 */
export function deleteSponsor(id) {
    return async (getState, dispatch) => {
        await axios({
            url: `${ROOT_URL}api/delete-sponsor`,
            method: 'post',
            params: {
                id
            }
        });
    }
}