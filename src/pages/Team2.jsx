import {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ENDPOINT = 'https://www.superheroapi.com/api.php/3156431871251248'
const Team = () => {
  const [team, setTeam] = useState([])
  useEffect(() => {
    const retrieveTeam = async () => {
      // let one = "https://www.superheroapi.com/api.php/3156431871251248/1"
      // let two = "https://www.superheroapi.com/api.php/3156431871251248/3"
      // let three = "https://www.superheroapi.com/api.php/3156431871251248/2"

      // let four = "https://www.superheroapi.com/api.php/3156431871251248/4"
      // let five = "https://www.superheroapi.com/api.php/3156431871251248/5"
      // let six = "https://www.superheroapi.com/api.php/3156431871251248/6"

      // const requestOne = axios.get(one);
      // const requestTwo = axios.get(two);
      // const requestThree = axios.get(three);
      // const requestFour = axios.get(four);
      // const requestFive = axios.get(five);
      // const requestSix = axios.get(six);

      // await axios.all([
      //   requestOne,
      //   requestTwo,
      //   requestThree,
      //   requestFour,
      //   requestFive,
      //   requestSix
      // ]).then(axios.spread((...responses) => {
      //   const array = []
      //   responses.map((item) => (array.push(item.data)))
      //   setTeam(array)

      // })).catch(errors => {
      //   console.log(errors)
      // })

      let promises = [];
      let i=0
      const array =[]
      for ( i = 1; i < 7; i++) {
        promises.push(
        await axios.get(`${ENDPOINT}/${i}`)
        .then(response => {
            // console.log(response.data)
            array.push(response.data)
          })
          .catch(e =>{
            console.log(e)
          })
        )
      }

      Promise.all(promises).then(() => {
        console.log('all done')
        setTeam(array)
      });
    }
    retrieveTeam()
  }, [])
  return (
    <div className="row">


      {
      team.map((hero) => (
        <div key={hero.id} className="col-lg-4 col-md-6 col-12 mb-5">
          <div className="card border border-secondary rounded-lg" style={{width: "80%"}}>
          <img src={hero.image.url} className="card-img-top img-hero" alt="..."/>
          <h5 className="card-title text-center mt-3">{hero.name}</h5>
          <div className="card-body">
            <span className="d-block">Intelligence: {hero.powerstats.intelligence}</span>
            <span className="d-block">Strength: {hero.powerstats.strength}</span>
            <span className="d-block">Speed: {hero.powerstats.speed}</span>
            <span className="d-block">Durability: {hero.powerstats.durability}</span>
            <span className="d-block">Power: {hero.powerstats.power}</span>
            <span className="d-block">Combat: {hero.combat}</span>
            <strong>Alignment: {hero.biography.alignment}</strong>
          </div>
          <div className="card-footer text-muted">
            <Link to="/" className="btn btn-sm btn-success float-left ">Show</Link>
            <Link to="/" className="btn btn-sm btn-danger float-right">Delete</Link>
          </div>
        </div>
       
       

        </div>
      ))
    } </div>
  )
}

export default Team
