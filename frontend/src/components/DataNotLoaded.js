import React from "react"

const DataNotLoaded = ({ children }) => {
  return (
    <div className="container is-max-desktop content is-large has-text-centered">
      <div className="notification is-primary">
        <div className="material-icons">refresh</div>
        <h5 className="title is-5">
          {children}
        </h5>
      </div>
    </div>
  )
}

export default DataNotLoaded
