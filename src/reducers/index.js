import { combineReducers } from 'redux'

// import reducer files
import users from './users'
import loggedNavbar from './logged_navbar'
import getCategories from './get_categories'
import getPosts from './get_posts'
import submitForm from './submit_form'
import getWorkshops from './get_workshops'
import createWorkshop from './create_workshop'
import getSubmissions from './get_submissions'
import getContributors from './get_contributors'
import getSponsors from './get_sponsors'
import createContributor from './create_contributor'
import createSponsor from './create_sponsor'
import getNews from './get_news'
import getPieceOfNews from './get_one_news'

const rootReducer = combineReducers({
	users,
  	loggedNavbar,
  	getCategories,
	getPosts,
	submitForm,
	getWorkshops,
	createWorkshop,
	getSubmissions,
	getSponsors,
	getContributors,
	createContributor,
	createSponsor,
	getNews,
	getPieceOfNews
});

export default rootReducer;