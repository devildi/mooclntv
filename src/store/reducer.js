import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
	open: false,
	url: "//vjs.zencdn.net/v/oceans.mp4",
	data: []
});
const reducer = (state = defaultState, action) => {
	switch (action.type){
		case actionTypes.OPEN_MODAL:
		console.log(JSON.parse(action.url))
		 	return state.merge({
				open: true,
				url: JSON.parse(action.url)
			})
		case actionTypes.CLOSE_MODAL:
		 	return state.set('open', false);
		case actionTypes.INIT_DATA:
			return state.set('data', action.data)
		default:
			return state;
	}
}

export default combineReducers({
	main: reducer
});
