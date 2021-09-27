import {createContext, useEffect, useState } from 'react'

const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const [jwt, setJWT] = useState(
    () => window.localStorage.getItem('jwt')
  )
  const [teamId, setTeamId] = useState(()=>JSON.parse(window.localStorage.getItem('teamId')))
  useEffect(() => {
    const existJWT=window.localStorage.getItem('jwt')
    if(existJWT===null){
      window.localStorage.removeItem('teamId')
    }

  }, [])
  let isLogged = Boolean(jwt)
  const data ={jwt, setJWT, isLogged, teamId, setTeamId};
  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}
export {AuthProvider}
export default AuthContext
