import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Skills from './Skills'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Skills />
    </BrowserRouter>,
    div)
  ReactDOM.unmountComponentAtNode(div)
})