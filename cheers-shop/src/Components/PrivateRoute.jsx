import React, {useContext} from 'react'
import { AuthContext } from '../Context/AuthContextProvide'
import { Navigate } from 'react-router-dom'

const PrivateRoute = (props) => {
    const isAuth = localStorage.getItem("auth")
console.log(isAuth)
    if(!isAuth){
        return <Navigate to="/sign-up" />
      }
  return props.children
}

export default PrivateRoute
