import {Link} from 'react-router-dom';
import Loading from '../common/Loading';
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
    <> 
    <h1>estoy en components</h1>
    {
      (isLoading) ? (
        <Loading/>
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
