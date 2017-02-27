import React from 'react'
import IntakeForm from './IntakeForm'
import {Provider} from 'react-redux'
import { reducer as form } from 'redux-form'
import {createStore, combineReducers} from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const endpoint = 'http://172.30.30.153:3001/intake'

const onSubmit = data =>
  fetch(endpoint, {
    method: "post",
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(data)
  }).catch(console.error)

const store = createStore(combineReducers({form}))

const App = props =>
  <MuiThemeProvider>
    <Provider {...{store}}>
      <IntakeForm {...{onSubmit}}/>
    </Provider>
  </MuiThemeProvider>

export default App
