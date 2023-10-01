import React, { useContext, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { UserContext } from "../../context/UserContext/UserContext"
import {
  getCurrentUser,
  loginUser,
  setAxiosAuthToken,
  setToken,
  unsetCurrentUser,
} from "../../services/auth"

const Login = () => {
  const history = useHistory()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const { isAuth, setIsAuth } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser(username, password)
      .then((response) => {
        const token = response
        setIsAuth(true)
        setAxiosAuthToken(token)
        setToken(token)
        getCurrentUser()
        history.push("/")
      })
      .catch((error) => {
        unsetCurrentUser()
        console.log(error)
      })
  }

  // const showHidePassword = (el, inp) => {
  //   const input = document.getElementById(inp)
  //   const target = document.getElementById(el)

  //   console.log(target)

  //   if (input.type == "password") {
  //     target.textContent = "visibility_off"
  //     input.type = "text"
  //   } else {
  //     target.textContent = "visibility"
  //     input.type = "password"
  //   }
  // }

  return (
    <div className="container pt-5">
      <div className="columns is-centered">
        <div className="column is-6">
          <div className="card">
            <div className="card-content">
              <form onSubmit={handleSubmit}>
                <h3 className="title is-3">Discord Clone</h3>
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input"
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                      name="username"
                    />
                    <span className="icon is-small is-left">
                      <i className="material-icons">person</i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="password"
                      placeholder="Password"
                      id="password-input"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="icon is-small is-left">
                      <i className="material-icons">lock</i>
                    </span>
                    {/* <span className="icon is-right">
                      <i
                        className="material-icons"
                        id="show-hide-icon"
                        onClick={showHidePassword.bind(this, "password-input")}
                      >
                        visibility
                      </i>
                    </span> */}
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button className="button is-success" type="submit">
                      Login <i className="material-icons">send</i>
                    </button>
                  </p>
                  <br />
                  <span>
                    Don't have an account? <Link to="/register">Register</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
