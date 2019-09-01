import React from 'react'
import ReactDom from 'react-dom'
import Card from './Card'
import * as serviceWorker from './serviceWorker'



ReactDom.render(<Card/>, document.getElementById('root'));
serviceWorker.unregister();