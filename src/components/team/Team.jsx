import { Link } from "react-router-dom";
import Loading from "../common/Loading";
import Aside from "./Aside";
import Hero from "./Hero";
import ListHero from "./ListHero";
import useTeam from "../../hooks/useTeam";
import { useSelector } from "react-redux";

const Team = () => {
  const { isLoading, deleteHero } = useTeam();
  const team = useSelector((s) => s.team);

  function buttonOptions(hero) {
    return (
      <>
        <Link
          to={`/team/${hero.id}`}
          className="btn btn-sm btn-success float-left "
        >
          Show
        </Link>
        <button
          className="btn btn-sm btn-danger float-right"
          onClick={() => deleteHero(hero.id)}
        >
          Delete
        </button>
      </>
    );
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* <nav className="navbar color-bg-t p-0 mb-3">
            <Link className="btn btn-lg btn-primary" to="/team/add">Add Hero</Link>
          </nav> */}
          <div className="row min-vw-100% object">
            <div className="col-md-12 col-lg-2 min-vw-100% ">
              <Aside
                averageHeight={Hero.averageHeight(team)}
                averageWeight={Hero.averageWeight(team)}
                powerstats={Hero.sortPower(team)}
              />
            </div>
            <br />
            <div className="col-md-12 col-lg-10 min-vw-100%">
              <ListHero teamAux={team} buttonOptions={buttonOptions} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Team;
