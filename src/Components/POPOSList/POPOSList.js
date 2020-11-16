import React from 'react'
import './POPOSList.css'
import POPOSSpace from './POPOSSpace/POPOSSpace'
import data from '../../sfpopos-data.json'

const POPOSList = () => {
  const spaces = data.map(place => {
    const { title, address, images } = place
    return (
      <POPOSSpace
        key={title}
        name={title}
        address={address}
        image={images[0]}
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
