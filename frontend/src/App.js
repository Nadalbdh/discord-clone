import React, { lazy, Suspense, useState } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import Loader from "./components/Loader"
import { UserContext } from "./context/UserContext/UserContext"
import PrivateRoute from "./routes/PrivateRoute"
import ProtectedRoutes from "./routes/ProtectedRoutes"
import PublicRoute from "./routes/PublicRoute"
import { getToken } from "./services/auth"

const Login = lazy(() => import("./pages/Login/Login"))
const Register = lazy(() => import("./pages/Register/Register"))
const Footer = lazy(() => import("./parts/Footer"))
const Header = lazy(() => import("./parts/Header"))

const App = () => {
  const [isAuth, setIsAuth] = useState(getToken())

  return (
    <UserContext.Provider value={{ isAuth, setIsAuth }}>
      <Router>
        <Suspense fallback={<Loader />}>
          <Header />
          <Switch>
            <PublicRoute path="/login" component={Login} authed={isAuth} />
            <PublicRoute
              path="/register"
              component={Register}
              authed={isAuth}
            />
            <PrivateRoute path="/" authed={isAuth}>
              <ProtectedRoutes />
            </PrivateRoute>
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </UserContext.Provider>
  )
}

export default App
