import React, { useEffect, useState } from "react"
import { requestToJoinServer } from "../../services/notifications"
import {
  getServerCategories,
  getServersInCategory,
  getServersInSearch,
} from "../../services/servers"

const ExploreServers = () => {
  const [serverCategory, setServerCategory] = useState([])
  const [servers, setServers] = useState([])
  const [searchBody, setSearchBody] = useState()

  const [activeCategoryCSS, setActiveCategoryCSS] = useState(null)

  useEffect(() => {
    getServerCategories().then((response) => {
      setServerCategory(response)
    })
  }, [])

  const handleClick = (parameter) => {
    getServersInCategory(parameter).then((response) => {
      setServers(response.results)
    })

    if (activeCategoryCSS) {
      document.getElementById(activeCategoryCSS).classList.remove("is-active")
    }
    document.getElementById(parameter).classList.add("is-active")
    setActiveCategoryCSS(parameter)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    getServersInSearch(searchBody).then((response) => {
      setServers(response)
    })
  }

  const handleRequestToJoin = (parameter) => {
    requestToJoinServer(parameter).then((response) => {
      console.log("Request To Join Server")
    })

    // if (activeCategoryCSS) {
    //   document.getElementById(activeCategoryCSS).classList.remove("is-active")
    // }
    // document.getElementById(parameter).classList.add("is-active")
    // setActiveCategoryCSS(parameter)
  }

  return (
    <main>
      <div className="container pt-5">
        <div className="columns is-centered">
          <div className="column is-10">
            <div className="card">
              <div className="card-content">
                <h1 className="title is-1">Explore</h1>
                <p className="subtitle is-3">Look for servers</p>

                <form onSubmit={handleSubmit}>
                  <div className="field is-grouped">
                    <p className="control is-expanded">
                      <input
                        className="input"
                        type="text"
                        placeholder="Find any interesting server"
                        onChange={(e) => setSearchBody(e.target.value)}
                      />
                    </p>
                    <p className="control">
                      <button type="submit" className="button is-info">
                        Search
                      </button>
                    </p>
                  </div>
                </form>

                <div className="tabs is-centered">
                  <ul>
                    {serverCategory.map((category) => (
                      <li key={category.id} id={category.id}>
                        <a onClick={handleClick.bind(this, category.id)}>
                          <span className="icon is-small">
                            <i className="material-icons">{category.icon}</i>
                          </span>
                          <span>{category.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="columns pt-1">
                  {servers.map((server) => (
                    <div className="column is-3" key={server.id}>
                      <div className="card">
                        <div className="card-image">
                          <figure className="image is-4by3">
                            <img src={server.banner} alt="Placeholder image" />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="media">
                            <div className="media-left">
                              <figure className="image is-48x48">
                                <img
                                  src={server.picture}
                                  alt="Placeholder image"
                                />
                              </figure>
                            </div>
                            <div className="media-content">
                              <p className="title is-4">{server.title}</p>
                              <p className="subtitle is-6">
                                @{server.user.username}
                              </p>
                            </div>
                          </div>

                          <div className="content">
                            {server.description}
                            <br />
                            <time>{server.date}</time>
                          </div>

                          <div className="card-footer">
                            <a
                              onClick={handleRequestToJoin.bind(
                                this,
                                server.id
                              )}
                              className="card-footer-item"
                            >
                              Request Join
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ExploreServers
