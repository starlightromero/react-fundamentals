import React from 'react'
import { NavLink } from 'react-router-dom'
import './Title.css'

const Title = () => (
  <div className='Title'>
    <h1>SFPOPOS</h1>
    <h3 className='Title-Subtitle'>San Francisco Privately Owned Public Open Spaces</h3>
    <div>
      <NavLink exact to='/' className='nav-link' activeClassName='nav-link-active'>
        Home
      </NavLink>
      <NavLink exact to='/about' className='nav-link' activeClassName='nav-link-active'>
        About
      </NavLink>
    </div>
  </div>
)

export default Title
