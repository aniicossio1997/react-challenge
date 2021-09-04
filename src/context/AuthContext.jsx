import {createContext, useEffect, useState } from 'react'

const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const [jwt, setJWT] = useState(
    () => window.localStorage.getItem('jwt')
  )
  const [teamId, setTeamId] = useState(()=>JSON.parse(window.localStorage.getItem('teamId')))
  const [teamData,setTeamData]=useState(()=>JSON.parse(window.localStorage.getItem('teamData')))
  useEffect(() => {
    const existJWT=window.localStorage.getItem('jwt')
    if(existJWT===null){
      window.localStorage.removeItem('teamId')
      window.localStorage.removeItem('teamData')
    }

  }, [])
  let isLogged = Boolean(jwt)
  const data ={jwt, setJWT, isLogged, teamId, setTeamId,teamData,setTeamData};
  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}
export {AuthProvider}
export default AuthContext
