import axios from 'axios'

import {
	ROOT_URL,
	USER_LOGIN,
 	USER_LOGOUT,
 	GET_LOGGED_NAVBAR,
    GET_POSTS,
    USER_STORE_LOGIN,
    SEND_FORM,
    GET_CATEGORIES,
    GET_WORKSHOPS,
    CREATE_WORKSHOP,
    GET_SUBMISSIONS,
    GET_CONTRIBUTORS,
    GET_SPONSORS,
    CREATE_CONTRIBUTOR,
    GET_NEWS,
    GET_ONE_NEWS
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
 * Submits the completed form
 */
export function sendForm({...values}) {
    return async (dispatch, getState) => {
        await axios({
            headers: { 
                'content-type': 'application/json'
            },
            method: 'post',
            url: `${ROOT_URL}api/submit-form`,
            params: {
                name: values.name,
                email: values.email,
                phone: values.phone,
                age: values.age,
                facebook_link: values.facebook,
                city: values.city,
                region: values.region,
                workshop: values.workshop,
                found_out: values.found,
                motivation: values.motivation,
                expectations: values.expectations,
                personal_project: values.project,
                personal_experience: values.life,
                personal_values: values.values,
                random_question: values.question,
                good_deed: values.deed,
                future_view: values.future
            }
        }).then((response) => dispatch(dispatchSendForm(response)));
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
 * Fetches the active news from the database
 */
export function getNewsActive() {
    return (dispatch) => {
		axios.get(`${ROOT_URL}api/get-news-active`)
			.then((response) => { dispatch(dispatchGetNews(response)) });
	}
}

/**
 * Fetches the news from the database
 */
export function getNews() {
    return (dispatch) => {
        axios.get(`${ROOT_URL}api/get-news`)
            .then((response) => { dispatch(dispatchGetNews(response)) });
    }
}

/**
 * Dispatches the fetched news towards the reducers
 */
function dispatchGetNews(data) {
    return {
        type: GET_NEWS,
        payload: data
    };
}

/**
 * Fetches the piece of news from the database as requested from the database
 * @param id
 */
export function getOneNews(id) {
    return (dispatch) => {
		axios.get(`${ROOT_URL}api/get-one-news?id=${id}`)
			.then((response) => { dispatch(dispatchGetNewsOne(response)) });
	}
}

/**
 * Dispatches the fetched piece of news as requested from the database by the @param id
 */
function dispatchGetNewsOne(data) {
    return {
        type: GET_ONE_NEWS,
        payload: data
    };
}