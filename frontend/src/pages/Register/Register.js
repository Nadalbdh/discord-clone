import React, { useContext, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { registerUser } from "../../services/auth"
import { UserContext } from "../../context/UserContext/UserContext"

const Register = () => {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [password2, setPassword2] = useState()
  const { isAuth, setIsAuth } = useContext(UserContext)

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password2 !== password) {
      alert("Passwords don't match")
    } else {
      const registered = registerUser(username, password, email)
      if (registered) {
        setIsAuth("true")
        history.push("/login")
      } else {
        history.push("/register")
      }
    }
  }

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
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                    <span className="icon is-small is-left">
                      <i className="material-icons">person</i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input"
                      type="text"
                      name="username"
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                    />
                    <span className="icon is-small is-left">
                      <i className="material-icons">person</i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="icon is-small is-left">
                      <i className="material-icons">lock</i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      className="input"
                      type="password"
                      placeholder="Repeat Password"
                      name="password2"
                      onChange={(e) => setPassword2(e.target.value)}
                    />
                    <span className="icon is-small is-left">
                      <i className="material-icons">lock</i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control">
                    <button className="button is-success">Register</button>
                  </p>
                  <br />
                  <span>
                    Have an account? <Link to="/login">Login</Link>
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

export default Register
