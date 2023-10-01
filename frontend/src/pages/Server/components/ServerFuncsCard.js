import React from "react"

const ServerFuncsCard = ({ modalTrigger, serverDetail, handleCLick }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <button
            onClick={modalTrigger.bind(this, "add-category-modal")}
            className="button is-small is-primary is-rounded"
          >
            <span className="icon is-small">
              <i className="material-icons">add</i>
            </span>
            <span>Category</span>
          </button>
          {serverDetail.categories.map((category) => (
            <aside className="menu" key={category.id}>
              <hr />
              <p className="menu-label">{category.title}</p>

              <button
                onClick={modalTrigger.bind(
                  this,
                  "add-channel-modal",
                  category.id
                )}
                className="button is-small is-primary is-rounded"
              >
                <span className="icon is-small">
                  <i className="material-icons">add</i>
                </span>
                <span>Channel</span>
              </button>

              <ul className="menu-list">
                {category.text_channels.map((text_channel) => (
                  <li key={text_channel.id}>
                    <a onClick={handleCLick.bind(this, text_channel)}>
                      {text_channel.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServerFuncsCard
