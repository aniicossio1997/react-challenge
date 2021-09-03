import React from 'react'

const List = ({teamAux, buttonOptions, options,listPowerstats}) => {
  return (
    <>
     <div className="col-md-12 col-lg-10 min-vw-100%">
        
        <div className="row">
          {
          teamAux.map((hero) => (
            <div key={hero.id} className="col-lg-4 col-md-6 col-12 mb-3 " style={{maxWidth:"100%"}}>

            <div className="card mb-2" style={{maxWidth:"100%"}}>
              <div className="row no-gutters">
                <div className="col-6">
                  <img src={hero.image.url} className="img-hero  mr-5" alt="..."/>
                </div>
                <div className="col-6">
                  <div className="card-body">
                    <h1>{hero.id}</h1>
                    

                    <h5 className="card-title badge badge-secondary ">{hero.name}</h5>
                    {listPowerstats(hero.powerstats)}
                    <strong>Alignment: {hero.biography.alignment}</strong>
                  </div>
                </div>
              </div>
              <div className="card-footer text-muted">
                {buttonOptions(hero, options)}
              </div>
            </div>


            </div>
          ))
        } </div>
        
      </div>
    
       
    </>
  )
}

export default List
