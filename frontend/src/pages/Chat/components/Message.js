import React from "react"

const Message = ({ chat, isAdmin, handleDeleteMsg }) => {
  // Allowed file types
  const allowedImageExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.svg)$/i
  const allowedVideoExtensions =
    /(\.mp4|\.ogg|\.mkv|\.avi|\.mov|\.webm|\.swf|\.wmv|\.flv)$/i
  const allowedAudioExtensions = /(\.mp3|\.aac|\.wav|\.flac|\.alac|\.dsd)$/i

  return (
    <li className="pt-3" key={chat.id}>
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img className="is-rounded" src={chat.user.profile.picture} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{chat.user.username}</strong> | <small>{chat.date}</small>
            </p>
            <p>{chat.body}</p>
            {allowedAudioExtensions.exec(chat.file) ? (
              <audio controls preload="auto" muted>
                <source src={chat.file} />
                Not supported
              </audio>
            ) : allowedVideoExtensions.exec(chat.file) ? (
              <video width="320" height="240" controls loop autoPlay={false}>
                <source src={chat.file} />
                Not supported
              </video>
            ) : allowedImageExtensions.exec(chat.file) ? (
              <img src={chat.file} />
            ) : (
              ""
            )}
          </div>
        </div>
        {isAdmin ? (
          <div className="media-right">
            <button
              onClick={handleDeleteMsg}
              className="delete"
              id={chat.id}
            ></button>
          </div>
        ) : (
          <div></div>
        )}
      </article>
    </li>
  )
}

export default Message
