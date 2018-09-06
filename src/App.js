import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import Paper from './components/paper'
import Bar from './components/bar'
import Gridlist from './components/gridlist'
import Modal from './components/modal'

const App = () => (
	<Provider store={store}>
    <div className="App">
      <Bar />
      <Gridlist />
      <Paper />
      <Modal />
    </div>
  </Provider>
)

export default App
