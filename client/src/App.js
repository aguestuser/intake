import React from 'react'
import Form from './Form'
import {Provider} from 'react-redux'
import { reducer as form } from 'redux-form'
import {createStore, combineReducers} from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


const store = createStore(combineReducers({form}))

const App = props => {
  const formName = window.location.pathname.match(/^\/(.+)/)[1];

  return <MuiThemeProvider>
           <Provider {...{store}}>
             <Form {...{formName}}/>
           </Provider>
         </MuiThemeProvider>
}
export default App
