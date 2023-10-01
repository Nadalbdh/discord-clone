import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import DataNotLoaded from "../../components/DataNotLoaded"
import {
  deleteNotification,
  getNotfications,
  postAcceptInvitation,
} from "../../services/notifications"

const Notifications = () => {
  const history = useHistory()

  const [notifications, setNotifications] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    getNotfications().then((response) => {
      setNotifications(response)
      setDataLoaded(true)
    })
  }, [])

  const handleAcceptInvitation = (e) => {
    e.preventDefault()
    postAcceptInvitation(e.target.id).then((response) => {
      document.getElementById(e.target.id).parentNode.parentNode.style.display =
        "none"
    })
  }

  const handleDeleteNotification = (e) => {
    e.preventDefault()
    deleteNotification(e.target.id).then((response) => {
      document.getElementById(e.target.id).parentNode.parentNode.style.display =
        "none"
    })
  }

  return (
    <>
      {dataLoaded ? (
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <div className="card">
                <div className="card-content">
                  <div className="level-right">
                    <button
                      onClick={() => history.push("/")}
                      className="delete"
                    ></button>
                  </div>
                  <div className="content">
                    <h1 className="title">All Your Notifications</h1>
                    {notifications.length ? (
                      notifications.map((invi) => (
                        <article key={invi.id} className="media">
                          <figure className="media-left">
                            <p className="image is-64x64">
                              <img
                                className="is-rounded"
                                src={invi.from_user.profile.picture}
                              />
                            </p>
                          </figure>
                          <div className="media-content">
                            <div className="content">
                              <p>
                                <strong>
                                  {invi.from_user.first_name}{" "}
                                  {invi.from_user.last_name}
                                </strong>
                                <small>@{invi.from_user.username}</small>
                              </p>
                              <p>
                                {invi.notification_type === 1
                                  ? "Invited you to the server "
                                  : "Wants to Join to the Server "}
                                <strong>{invi.to_server.title}</strong>
                              </p>
                            </div>
                          </div>
                          {/* className="buttons" */}
                          <div className="media-right">
                            <button
                              id={invi.id}
                              onClick={handleAcceptInvitation}
                              className="button is-success"
                            >
                              <i className="material-icons">check</i>
                              Accept
                            </button>
                            <button
                              id={invi.id}
                              onClick={handleDeleteNotification}
                              className="button is-danger"
                            >
                              <i className="material-icons">clear</i>
                              Decline
                            </button>
                          </div>
                        </article>
                      ))
                    ) : (
                      <p>No notifications...</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <DataNotLoaded>You don't have any notifications to show.</DataNotLoaded>
      )}
    </>
  )
}

export default Notifications
