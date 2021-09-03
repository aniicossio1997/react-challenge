import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import AuthContext from './context/AuthContext'

const WithoutProted = ({component:Component, ...rest}) => {
 
    const { isLogged } = useContext(AuthContext)
    return (
      <>
        <Route {...rest} render={(props) =>{
          if(!isLogged){
            return<Component/>
          }else{
           return <Redirect to={{pathname: '/team', state:{ from: props.location }}}/>
          }
        }}
      
      />
      </>
    )
  
}

export default WithoutProted
