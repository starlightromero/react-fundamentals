import React from 'react'
import './POPOSList.css'
import POPOSSpace from './POPOSSpace/POPOSSpace'
import data from '../../sfpopos-data.json'

const POPOSList = () => {
  const spaces = data.map(place => {
    const { title, address, images, hours } = place
    return (
      <POPOSSpace
        key={title}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    )
  })

  return (
    <div className='POPOSList'>
      { spaces }
    </div>
  )
}

export default POPOSList
