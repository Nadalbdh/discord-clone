import React from "react"
import { Redirect, Route } from "react-router-dom"

const PrivateRoute = ({ children, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authed ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
