import React from 'react'
import './App.css'
import Paper from './components/paper'
import Bar from './components/bar'
import Gridlist from './components/gridlist'
import Modal from './components/modal'

import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreator'

class App extends React.Component{

	componentDidMount() {
    this.props.fatchData()
  }

	render(){
		return(
	    <div className="App">
	      <Bar />
	      <Gridlist />
	      <Paper />
	      <Modal />
	    </div>
		)
	}
}

const mapDispatch = (dispatch) => {
  return {
    fatchData(){
      dispatch(actionCreators.fatchData())
    },
  }
}

export default connect(null, mapDispatch)(App)
