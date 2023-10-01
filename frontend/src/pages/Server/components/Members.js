import React from "react"
import { banFromServer } from "../../../services/servers"

const Members = ({ members, isAdmin, server }) => {
  const handleBan = (e) => {
    e.preventDefault()
    banFromServer(e.target.id, server)
      .then(response => {
        document.getElementById(e.target.id).parentNode.parentNode.style.display = 'none'
      })
  }
  return (
    <div className="box">
      {members.map((member) => (
        <article className="media" key={member.id}>
          <figure className="media-left">
            <p className="image is-48x48">
              <img className="is-rounded" src={member.profile.picture} />
            </p>
          </figure>
          <div className="media-content">
            <p className="title is-6">
              {member.first_name} {member.last_name}
            </p>
            <p className="subtitle is-7">@{member.username}</p>
          </div>
          {isAdmin ? (
            <div className="media-right">
              <button
                onClick={handleBan}
                className="delete"
                id={member.id}
              ></button>
            </div>
          ) : (
            <div></div>
          )}
        </article>
      ))}
    </div>
  )
}

export default Members
