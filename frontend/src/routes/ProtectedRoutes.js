import React, { Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import Loader from "../components/Loader"
import routes from "./routes" // Route list

const ProtectedRoutes = () => (
  <Switch>
    <Suspense fallback={<Loader />}>
      {routes.map(({ component: Component, path, exact }) => (
        <Route path={`/${path}`} key={path} exact={exact}>
          <Component />
        </Route>
      ))}
    </Suspense>
  </Switch>
)

export default ProtectedRoutes
