import React, { useEffect, useState } from "react"
import DataNotLoaded from "../../components/DataNotLoaded"
import {
  deleteMessage,
  getChatData,
  getMoreChatData,
  sendMessage,
} from "../../services/chat"
import Message from "./components/Message"
import SendMessageForm from "./components/SendMessageForm"

const MainChat = ({ textChannel, chatData, setChatData, isAdmin, server }) => {
  const [body, setBody] = useState()
  const [chatFile, setChatFile] = useState()
  const [dataLoaded, setDataLoaded] = useState(false)

  const userData = JSON.parse(localStorage.getItem("user"))

  const [hasNext, setHasNext] = useState()

  useEffect(() => {
    setHasNext(null)
    if (textChannel) {
      getChatData(textChannel.id).then((response) => {
        setChatData(response.results)
        setDataLoaded(true)

        if (response.next) {
          setHasNext(response.next)
        }
      })
    }
  }, [textChannel])

  const handleSubmit = (e) => {
    e.preventDefault()

    sendMessage(body, chatFile, textChannel.id).then((response) => {
      setChatData([response, ...chatData])
      setBody("")
      setChatFile("")
    })
  }

  const handleLoadMore = (e) => {
    e.preventDefault()
    getMoreChatData(hasNext).then((response) => {
      setChatData([...chatData, ...response.results])
      if (response.next) {
        setHasNext(response.next)
      } else {
        setHasNext(null)
        document.getElementById("loadmorebtn").style.display = "none"
      }
    })
  }

  const handleDeleteMsg = (e) => {
    e.preventDefault()
    deleteMessage(e.target.id, server).then((response) => {
      document.getElementById(e.target.id).parentNode.parentNode.style.display =
        "none"
    })
  }

  return (
    <>
      {dataLoaded ? (
        <div>
          <section className="hero is-link">
            <div className="hero-body">
              <p className="title">{textChannel ? textChannel.title : ""}</p>
              <p className="subtitle">{textChannel ? textChannel.topic : ""}</p>
            </div>
          </section>

          <div className="level-item">
            <button
              className="button is-success"
              onClick={handleLoadMore}
              id="loadmorebtn"
              style={{ display: hasNext ? "flex" : "none" }}
            >
              <i className="material-icons">more_horiz</i>
            </button>
          </div>

          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column-reverse",
            }}
            className="collection"
          >
            {chatData.map((chat) => (
              <Message
                key={chat.id}
                chat={chat}
                isAdmin={isAdmin}
                handleDeleteMsg={handleDeleteMsg}
              />
            ))}
          </ul>

          <br />

          <article className="media">
            <figure className="media-left">
              <p className="image is-64x64">
                <img className="is-rounded" src={userData.picture} />
              </p>
            </figure>
            <div className="media-content">
              <SendMessageForm
                chatFile={chatFile}
                setChatFile={setChatFile}
                setBody={setBody}
                body={body}
                handleSubmit={handleSubmit}
              />
            </div>
          </article>
        </div>
      ) : (
        <DataNotLoaded>
          Click on any channel to get the information about that.
        </DataNotLoaded>
      )}
    </>
  )
}

export default MainChat
