import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Aside from './Aside';
import Hero from './Hero';
import ListHero from './ListHero';
import useTeam from './useTeam';


const Team = () => {
  const {team, isLoading, deleteHero, teamAux} = useTeam()
  function buttonOptions(hero) {

    return (
      <>
        <Link to={
            `/team/${
              hero.id
            }`
          }
          className="btn btn-sm btn-outline-success float-left ">Show</Link>
        <button className="btn btn-sm btn-outline-danger float-right"
          onClick={
            () => deleteHero(hero.id)
        }>Delete</button>
      </>
    );
  }
  return (
    <> {
      (isLoading) ? (
        <div className="container text-center mt-5">
        <div class="spinner-border text-primary mt-5" style={{height: "80px", width: "80px"}} role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <h1>Loading ...</h1>
        </div>
      ) : (
        <>
          <nav className="navbar navbar-light bg-light p-0 mb-3">
            <Link className="btn btn-lg btn-outline-primary" to="/team/add">Add Hero</Link>

          </nav>
          <div className="row min-vw-100% object">
            <div className="col-md-12 col-lg-2 min-vw-100% ">

              <Aside averageHeight={
                  Hero.averageHeight(teamAux)
                }
                averageWeight={
                  Hero.averageWeight(teamAux)
                }
                powerstats={
                  Hero.sortPower(teamAux)
                }/>

            </div>
            <div className="col-md-12 col-lg-10 min-vw-100%">
        
            <ListHero teamAux={teamAux}
              buttonOptions={buttonOptions}
             />
             </div>

          </div>

        </>


      )
    } </>
  )
}

export default Team
