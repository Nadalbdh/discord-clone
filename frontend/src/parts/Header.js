import React, { useContext } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserContext/UserContext"
import { logout } from "../services/auth"

const Header = () => {
  const history = useHistory()
  const { isAuth, setIsAuth } = useContext(UserContext)

  return (
    <header>
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item">
            <img src="/static/img/discord.png" width="50" />
            <Link to="/" className="title is-5 has-text-light">
              DiscordClone
            </Link>
          </div>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarTarget"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarTarget" className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item" title="Home" to="/">
              <i className="material-icons">home</i>
            </Link>
            <Link
              to="/notifications"
              className="navbar-item"
              title="Notifications"
            >
              <i className="material-icons">notifications</i>
            </Link>
            <Link to="/profile" className="navbar-item" title="Me">
              <i className="material-icons">person</i>
            </Link>
            <div className="navbar-item">
              <div className="buttons">
                <button
                  className="button is-danger"
                  onClick={() => {
                    logout()
                    setIsAuth(false)
                    history.push("/login")
                  }}
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
