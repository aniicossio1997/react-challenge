import { useContext, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import AuthContext from '../context/AuthContext'
import { TeamService } from '../services/TeamService'
import {getTeamAction} from '../redux/teamDucks'
const useTeam = (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const {teamId, setTeamId, teamData, setTeamData} = useContext(AuthContext)
  const [teamAux, setTeamAux] = useState([])
  const [team, setTeam] = useState([])
  const getTeamData = JSON.parse(localStorage.getItem('teamData'))
  const dispatch =useDispatch()

  const deleteHero = (id) => {
    setIsLoading(true)
    console.log(id)
    const getTeamId = JSON.parse(localStorage.getItem('teamId'))
    setTeamId(getTeamId)

    if (getTeamId === null) {
      console.log(getTeamId)
      alert('Error:  Hero not present in the team ')
    } else {
      setTeamAux(getTeamData)
      const newArrayId = teamId.filter((item) => parseInt(item) !== parseInt(id));
      const newArrayData = teamAux.filter((item) => parseInt(item.id) !== parseInt(id));
      window.localStorage.setItem('teamData',JSON.stringify(newArrayData))
      window.localStorage.setItem('teamId', JSON.stringify(newArrayId))
      setTeamId(newArrayId)
      setTeamAux(newArrayData)
      setTeam(teamData)
    }
    setIsLoading(false)
  }


  useEffect(() => {
    dispatch(getTeamAction())

    const timer = setTimeout(() => { 

    }, 1050);
    setIsLoading(false)
    return() => clearTimeout(timer);

  }, [ dispatch])



  return({team, isLoading, deleteHero, teamAux})
}

export default useTeam
