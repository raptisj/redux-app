import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

const PrivateRoute = ({ component: Component, ...rest }) => {

const { isAuthenticated } = useSelector(state => state.auth);
const dispatch = useDispatch();
console.log(isAuthenticated)
return (
  <Route
    {...rest}
    render={props =>
      isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
  )
}

export default withRouter(PrivateRoute);
