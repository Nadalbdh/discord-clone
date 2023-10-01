import React from "react"

const AddChannelModal = ({
  handleSubmitChannel,
  modalClose,
  setTopicNewCh,
  setTitleNewCh,
}) => {
  return (
    <div className="modal" id="add-channel-modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <form onSubmit={handleSubmitChannel}>
          <header className="modal-card-head">
            <p className="modal-card-title">Create new text channel</p>
            <button
              onClick={modalClose.bind(this, "add-channel-modal")}
              className="delete"
              aria-label="close"
            ></button>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  id="titleChannel"
                  type="text"
                  maxLength="100"
                  className="input"
                  onChange={(e) => setTitleNewCh(e.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Topic</label>
              <div className="control">
                <input
                  id="topic"
                  type="text"
                  maxLength="150"
                  className="input"
                  onChange={(e) => setTopicNewCh(e.target.value)}
                />
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button type="submit" className="button is-success">
              Save changes
            </button>
            <a
              onClick={modalClose.bind(this, "add-channel-modal")}
              className="button"
            >
              Cancel
            </a>
          </footer>
        </form>
      </div>
    </div>
  )
}

export default AddChannelModal
