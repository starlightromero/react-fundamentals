import React from 'react'
import './Footer.css'

const Footer = () => {
  const date = new Date()
  return (
    <div className='Footer'>
      <p>Starlight Romero copyright { date.getFullYear() }</p>
    </div>
  )
}

export default Footer
