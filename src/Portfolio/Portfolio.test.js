import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Portfolio from './Portfolio'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Portfolio />
    </BrowserRouter>,
    div)
  ReactDOM.unmountComponentAtNode(div)
})