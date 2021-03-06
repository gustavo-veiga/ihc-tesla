import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router'
import * as serviceWorker from './serviceWorker'
import './i18n'
import './styles/custom.css'
import 'leaflet/dist/leaflet.css'
import 'react-chat-elements/dist/main.css'

ReactDOM.render(<Router />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
