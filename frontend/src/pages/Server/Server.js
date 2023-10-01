import React, { useEffect, useState } from "react"
import DataNotLoaded from "../../components/DataNotLoaded"
import { sendNewInvitation } from "../../services/notifications"
import {
  createNewCategory,
  createNewChannel,
  getServerData,
  leaveServer,
} from "../../services/servers"
import MainChat from "../Chat/MainChat"
import AddCategoryModal from "./components/AddCategoryModal"
import AddChannelModal from "./components/AddChannelModal"
import Members from "./components/Members"
import ServerDescCard from "./components/ServerDescCard"
import ServerFuncsCard from "./components/ServerFuncsCard"
import UserInvitationModal from "./components/UserInvitationModal"

const Server = ({
  servers,
  activeServer,
  setChatData,
  textChannel,
  setTextChannel,
  chatData,
}) => {
  const [serverDetail, setServerDetail] = useState()
  const [dataLoaded, setDataLoaded] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  // Category state
  const [titleNewCtg, setTitleNewCtg] = useState()
  // Channel state
  const [titleNewCh, setTitleNewCh] = useState()
  const [topicNewCh, setTopicNewCh] = useState()
  const [ctgForNewChannel, setCtgForNewChannel] = useState()

  const [username, setUsername] = useState()

  useEffect(() => {
    if (activeServer) {
      setDataLoaded(false)
      getServerData(activeServer).then((response) => {
        setServerDetail(response.data)

        if (response.is_admin) {
          setIsAdmin(true)
        }
        setDataLoaded(true)
      })
    }
  }, [activeServer])

  const modalTrigger = (parameter, category_id) => {
    const modal = document.getElementById(parameter)
    setCtgForNewChannel(category_id)
    modal.style.display = "block"
  }

  const modalClose = (parameter) => {
    const modal = document.getElementById(parameter)
    setCtgForNewChannel("")
    modal.style.display = "none"
  }

  const handleSubmitCategory = (e) => {
    e.preventDefault()

    createNewCategory(serverDetail.id, titleNewCtg).then((response) => {
      serverDetail.categories.push(response)
      modalClose("add-category-modal")
    })
  }

  const handleSubmitChannel = (e) => {
    e.preventDefault()
    createNewChannel(
      serverDetail.id,
      ctgForNewChannel,
      titleNewCh,
      topicNewCh
    ).then((response) => {
      // Filtering objects and adding them to top
      serverDetail.categories
        .filter((obj) => obj.id === ctgForNewChannel)[0]
        ["text_channels"].push(response)
      modalClose("add-channel-modal")
    })
  }

  const handleSubmitInvitation = (e) => {
    e.preventDefault()
    sendNewInvitation(username, serverDetail.id).then((response) => {
      modalClose("invite-user-modal")
    })
  }

  const handleLeaveServer = (e) => {
    e.preventDefault()
    leaveServer(serverDetail.id).then((response) => {
      location.reload()
    })
  }

  const handleCLick = (parameter, e) => {
    setTextChannel(parameter)
  }

  return (
    <>
      {dataLoaded ? (
        <main>
          <AddCategoryModal
            handleSubmitCategory={handleSubmitCategory}
            modalClose={modalClose}
            setTitleNewCtg={setTitleNewCtg}
          />
          <AddChannelModal
            handleSubmitChannel={handleSubmitChannel}
            modalClose={modalClose}
            setTopicNewCh={setTopicNewCh}
            setTitleNewCh={setTitleNewCh}
          />
          <UserInvitationModal
            handleSubmitInvitation={handleSubmitInvitation}
            setUsername={setUsername}
            username={username}
            modalClose={modalClose}
          />
          <div className="columns pt-1">
            <div className="column is-2">
              <ServerDescCard
                handleLeaveServer={handleLeaveServer}
                modalTrigger={modalTrigger}
                serverDetail={serverDetail}
              />
              <ServerFuncsCard
                handleCLick={handleCLick}
                modalTrigger={modalTrigger}
                serverDetail={serverDetail}
              />
            </div>

            <div className="column is-7">
              <MainChat
                textChannel={textChannel}
                chatData={chatData}
                setChatData={setChatData}
                isAdmin={isAdmin}
                server={serverDetail.id}
              />
            </div>
            <div className="column is-2">
              <Members
                members={serverDetail.members}
                isAdmin={isAdmin}
                server={serverDetail.id}
              />
            </div>
          </div>
        </main>
      ) : (
        <DataNotLoaded>
          Click on any server to get the information about that.
        </DataNotLoaded>
      )}
    </>
  )
}

export default Server
// https://rt.bongacams.cam/Brilliant444
