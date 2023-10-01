import React, { useEffect, useState } from "react"
import { getSideNavServers } from "../../services/servers"
import ServersNav from "../Server/components/ServersNav"
import Server from "../Server/Server"

const Home = () => {
  const [sideNavServers, setSideNavServers] = useState([])
  const [activeServer, setActiveServer] = useState()
  const [textChannel, setTextChannel] = useState()
  const [chatData, setChatData] = useState()

  useEffect(() => {
    getSideNavServers().then((response) => {
      setSideNavServers(response)
    })
  }, [])

  return (
    <div>
      <div className="columns">
        <div className="column is-1">
          <ServersNav
            servers={sideNavServers}
            setActiveServer={setActiveServer}
            setTextChannel={setTextChannel}
            setChatData={setChatData}
          />
        </div>
        <div className="column is-11">
          <Server
            servers={sideNavServers}
            activeServer={activeServer}
            textChannel={textChannel}
            setTextChannel={setTextChannel}
            chatData={chatData}
            setChatData={setChatData}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
