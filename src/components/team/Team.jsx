import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Aside from './Aside';
import Hero from './Hero';
import List from './listHero/List';
import useTeam from './useTeam';
function buttonOptions(hero, options){
  return (
      <>
        <Link to={`/team/${hero.id}`} className="btn btn-sm btn-outline-success float-left ">Show</Link>
        <button className="btn btn-sm btn-outline-danger float-right" onClick={() => options(hero.id)} >Delete</button>
      </>
  );
}
function listPowerstats(powerstats) {
  const itemRows = [];
  for (const property in powerstats) {
    const item =(<span className="d-block text-capitalize" key={property}>{property}: { (powerstats[property] == null | powerstats[property] == "null") ? 0 : powerstats[property]}</span>)
    itemRows.push(item);
  }
  return (itemRows.length === 0 ? null : itemRows)
}

const Team = () => {
  const { team, isLoading ,deleteHero, teamAux} = useTeam()


  return (
    <>

{
  (isLoading) ? (
    <h1>Cargando ...</h1>
  ) : (
<>
<nav className="navbar navbar-light bg-light p-0 mb-3">
<Link className="btn btn-lg btn-outline-primary" to="/team/add">Add héroe --</Link>

</nav>
    <div className="row min-vw-100% object">
      <div className="col-md-12 col-lg-2 min-vw-100% ">

        <Aside averageHeight={Hero.averageHeight(teamAux)} averageWeight={Hero.averageWeight(teamAux)} powerstats={Hero.sortPower(teamAux)}/>

     </div>
     <List teamAux={teamAux} buttonOptions={buttonOptions} options={deleteHero} listPowerstats={listPowerstats} />
    </div>

  </>
  
  
  
  )
}
    
    </>
  )
}

export default Team
