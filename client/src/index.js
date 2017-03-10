import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import injectTapEventPlugin from 'react-tap-event-plugin'

require('./stylesheets/app.scss');

injectTapEventPlugin()

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
