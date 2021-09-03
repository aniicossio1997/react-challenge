import {NavLink} from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className="card text-center">

    <div className="card-body">
      <h5 className="card-title">Hero</h5>
      <p className="card-text">This is a page of hero, to navigate please login</p>
      <NavLink className="btn btn-dark mr-2" to="/login" exact>
                  clickme
      </NavLink>
    </div>

    </div>
</>
  )
}

export default Home
