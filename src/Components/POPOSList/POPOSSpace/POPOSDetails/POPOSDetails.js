import React from 'react'
import data from '../../../../sfpopos-data.json'

const POPOSDetails = props => {
  const { id } = props.match.params
  const { images, title, desc, hours, features, geo } = data[id]

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}assets/${images[0]}`} alt={title} />
      </div>

      <div>
        <h1>{ title }</h1>
        <p>{ desc }</p>
        <p>{ hours }</p>
        <p>{ features }</p>
        <p>{ geo.lat } { geo.lon }</p>
      </div>

    </div>
  )
}

export default POPOSDetails