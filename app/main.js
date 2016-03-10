// var greeter = require('./Greeter')
// document.getElementById('root').appendChild(greeter())

import React from 'react'
import Greeter from './Greeter'
import { render } from 'react-dom'

import './main.css'

render(<Greeter />, document.getElementById('root'))

