import React from 'react'
import { Link } from 'react-router-dom'
import './POPOSSpace.css'

const POPOSSpace = props => {
  const { name, image, address, hours, id } = props
  return (
    <div className='POPOSSpace'>
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}assets/${image}`} width='300' height='300' alt={name} />
      </Link>
      <h1>
        <Link to={`/details/${id}`} className='location'>
          {name}
        </Link>
      </h1>
      <div>{ address }</div>
      <div className='hours'>{ hours }</div>
    </div>
  )
}

export default POPOSSpace
