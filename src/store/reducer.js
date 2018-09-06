// import { combineReducers } from 'redux-immutable';

// const reducer = combineReducers({

// });
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

import data from '../utils/data'

const defaultState = fromJS({
	open: false,
	data: data
});

const reducer = (state = defaultState, action) => {
	switch (action.type){
		case actionTypes.OPEN_MODAL:
		 	return state.set('open', true);
		case actionTypes.CLOSE_MODAL:
		 	return state.set('open', false);
		default:
			return state;
	}
}

export default reducer;
