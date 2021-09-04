import axios from 'axios'
import {useCallback, useContext, useEffect, useState} from 'react'
import AuthContext from '../context/AuthContext'
import SuperHeroApi from '../components/team/SuperHeroApi'

const useTeam = (props) => {
  const getData = JSON.parse(localStorage.getItem("teamData"));

  const [team, setTeam] = useState(() => JSON.parse(localStorage.getItem("teamData")));

  const [isLoading, setIsLoading] = useState(true)
  const {teamId, setTeamId} = useContext(AuthContext)
  const [teamAux, setTeamAux] = useState([])

  const deleteHero = useCallback((id) => {
    setIsLoading(true)
    console.log(id)
    const getTeamId = JSON.parse(localStorage.getItem('teamId'))
    setTeamId(getTeamId)

    if (getTeamId === null) {
      console.log(getTeamId)
      alert('Error:  Hero not present in the team ')
    } else {

      const newArrayId = teamId.filter((item) => parseInt(item) !== parseInt(id));
      const arrayFiltrado2 = teamAux.filter((item) => item.id !== id);

      setTeamAux(arrayFiltrado2);
      window.localStorage.setItem('teamId', JSON.stringify(newArrayId))
      setTeamId(newArrayId)
      window.localStorage.setItem('teamData', JSON.stringify(arrayFiltrado2))
      setTeam(getData)
      setIsLoading(false)
      console.log(team)
    }

  }, [teamAux]);

  useEffect(() => {
    const retrieveTeam = async () => {
      let promises = [];
      let i = 0
      const array = []
      const arrayIDs = JSON.parse(window.localStorage.getItem('teamId'))
      for (i = 0; i < arrayIDs.length; i++) {
        promises.push(axios.get(SuperHeroApi.withID(arrayIDs[i])).then(response => {
          array.push(response.data)
        }).catch(e => {
          console.log(e)
        }))
      }
      Promise.all(promises).then(() => {
        window.localStorage.setItem('teamData', JSON.stringify(array))
        setTeamAux(array)
        setIsLoading(false)

      });
    }
    retrieveTeam()
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!')
    }, 1000);
    return() => clearTimeout(timer);

  }, [])

  return({team, isLoading, deleteHero, teamAux})
}

export default useTeam
