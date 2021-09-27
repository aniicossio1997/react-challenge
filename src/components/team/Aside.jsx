import React from 'react'

const Aside = ({averageHeight,averageWeight,powerstats}) => {
  return (
    <>
    
      <ul className="list-group color-bg-t">
        {
          powerstats.map((power,index) =>(
            <li className={` text-capitalize  ${ index===0 ? " list-group-item active " : 'list-group-item bg-transparent'}`} key={index} aria-current="true">{power.name} : {power.value}</li>
          ))
        }
        <li className="list-group-item bg-transparent text-capitalize">Height: {averageHeight}cm </li>
        <li className="list-group-item bg-transparent mb-3 text-capitalize">Weight: {averageWeight}kg </li>
      </ul>
    </>
  )
}

export default Aside
