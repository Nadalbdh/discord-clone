import React, { useState } from "react"
import { Link } from "react-router-dom"

const ServersNav = ({
  servers,
  setActiveServer,
  setTextChannel,
  setChatData,
}) => {
  const [activeServerCSS, setActiveServerCSS] = useState(null)

  const handleClick = (parameter) => {
    setActiveServer(parameter)
    setTextChannel(null)
    setChatData([])

    if (activeServerCSS) {
      document.getElementById(activeServerCSS).classList.remove("active-img")
    }

    document.getElementById(parameter).classList.add("active-img")
    setActiveServerCSS(parameter)
  }

  return (
    <div className="box">
      <ul>
        <li style={{ paddingTop: "15px", paddingLeft: "5px" }}>
          <Link
            to="/createserver"
            className="button is-link is-small is-rounded"
          >
            <i className="material-icons">add</i>
            Create
          </Link>
        </li>
        <li style={{ paddingTop: "15px", paddingLeft: "5px" }}>
          <Link to="/explore" className="button is-small is-rounded">
            <i className="material-icons">search</i>
            Explore
          </Link>
        </li>
        {servers.map((server) => (
          <li
            key={server.id}
            style={{ paddingTop: "15px", paddingLeft: "5px" }}
          >
            <figure className="image is-64x54 is-rounded">
              <a onClick={handleClick.bind(this, server.id)}>
                <img
                  id={server.id}
                  src={server.picture}
                  className=" is-rounded"
                />
              </a>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServersNav
