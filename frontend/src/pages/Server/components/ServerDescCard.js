import React from "react"

const ServerDescCard = ({ serverDetail, modalTrigger, handleLeaveServer }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={serverDetail.banner} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4">{serverDetail.title}</p>
        <p className="subtitle is-6">{serverDetail.description}</p>
      </div>
      <div className="card-footer">
        <a
          onClick={modalTrigger.bind(this, "invite-user-modal")}
          className="card-footer-item"
        >
          Invite People
        </a>
        <a onClick={handleLeaveServer} className="card-footer-item">
          Leave Server
        </a>
      </div>
    </div>
  )
}

export default ServerDescCard
