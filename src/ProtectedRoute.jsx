import { useContext } from "react"
import { Redirect, Route } from "react-router"
import AuthContext from "./context/AuthContext"

const ProtectedRoute = ({component:Component, ...rest}) => {
  const { isLogged } = useContext(AuthContext)

  return (
    <>
      <Route {...rest} render={(props) =>{
        if(isLogged){
          return<Component/>
        }else{
         return <Redirect to={{pathname: '/login', state:{ from: props.location }}}/>
        }
      }}
    
    />
    </>
  )
}

export default ProtectedRoute
