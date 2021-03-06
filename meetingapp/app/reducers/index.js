/**
 * Main reducer
 * Calls the reducers managing parts of the state, and combines them into a single state object. 
 */

import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import auth from './auth';
import timetable from './timetable';

const reducers = { auth, timetable };

const rootReducer = combineReducers(Object.assign({}, reducers, {
	routing: routeReducer
}));

export default rootReducer;