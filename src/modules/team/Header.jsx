import React from 'react'

const Header = ({averageHeight,averageWeight, maxPower}) => {
  return (
    <>
    <div className="mb-3 w-100 text-center mb-3">
      <div className="justify-content-center w-70 mb-5" >
      <ul className="list-group list-group-horizontal-xl d-flex justify-content-center">
        <li className="list-group-item font-weight-bold btn-primary active"> Average Height: {averageHeight} cm</li>
        <li className="list-group-item font-weight-bold btn-primary active">Average weight: {averageWeight} kg</li>
        <li className="list-group-item font-weight-bold btn-primary active">Categorizado por: {maxPower.name} with: {maxPower.value} </li>
      </ul>
      </div>
    </div>
    </>
  )
}

export default Header
