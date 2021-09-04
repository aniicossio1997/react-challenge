import React from 'react'

const Aside = ({averageHeight,averageWeight,powerstats}) => {
  return (
    <>
    
      <ul className="list-group">
        {
          powerstats.map((power,index) =>(
            <li className={`list-group-item text-capitalize ${ index===0 && "active"}`} key={index} aria-current="true">{power.name} : {power.value}</li>
          ))
        }
        <li className="list-group-item text-capitalize">Height: {averageHeight}cm </li>
        <li className="list-group-item mb-3 text-capitalize">Weight: {averageWeight}kg </li>
      </ul>
    </>
  )
}

export default Aside
