import axios from 'axios';
import * as actionTypes from './actionTypes'

export const openModal = (url) => ({
	type: actionTypes.OPEN_MODAL,
	url: url
})

export const closeModal = () => ({
	type: actionTypes.CLOSE_MODAL
})

export const fatchData = () => {
	return (dispatch) => {
		axios.get('/mooc/all')
		.then((data) => {
			dispatch(initData(data.data.data))
		})
		.catch((err) => {
			console.log(err)
		})
	}
}

const initData = (data) => ({
	type: actionTypes.INIT_DATA,
	data: data
})