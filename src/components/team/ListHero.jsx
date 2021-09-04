import React from 'react'
import HeroListItem from "./HeroListItem"
const List = ({teamAux, buttonOptions}) => {
  return (
    <>

        <div className="row">
          {
          teamAux.map((hero) => (
            <div key={hero.id} className="col-lg-4 col-md-6 col-12 mb-3 " style={{maxWidth:"100%"}}>

            <HeroListItem hero={hero} buttonOptions={buttonOptions} />


            </div>
          ))
        } </div>
        
    
       
    </>
  )
}

export default List
