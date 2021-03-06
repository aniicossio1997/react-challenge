import {Link, NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import useUser from '../hooks/useUser';


const Navbar = (props) => {
  const { logout,isLogged } =useUser()

  const handleLogout = () =>{
    logout()
    props.history.push('/login')
  }

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark color-bg-t pb-2  " style={{zIndex: "2"}}>
          <Link to="/" className="navbar-brand">
            <strong>
              <i>{`<<SuperHero>>`}</i>
            </strong>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav w-100 nav justify-content-end">
            {
              isLogged && 
              (<>
              <li className="nav-item active">
              <NavLink className="btn btn-dark mr-2" to="/team" exact>
                team
              </NavLink>
            </li>
            <li className="nav-item">
            <button className="btn btn-danger"onClick={handleLogout} >
              Logout  
              </button>
              </li>
            </>
            )
            }           

        


            </ul>
          </div>
        </nav>
      </header>



    </>
  );
};

export default withRouter(Navbar);
