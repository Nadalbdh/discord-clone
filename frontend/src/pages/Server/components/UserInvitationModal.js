import React from "react"

const UserInvitationModal = ({ username, setUsername, handleSubmitInvitation, modalClose }) => {
  return (
    <div className="modal" id="invite-user-modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <form onSubmit={handleSubmitInvitation}>
          <header className="modal-card-head">
            <p className="modal-card-title">Invite user</p>
            <a
              onClick={modalClose.bind(this, "invite-user-modal")}
              className="delete"
              aria-label="close"
            ></a>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  id="userinviteipt"
                  type="text"
                  className="input"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button type="submit" className="button is-success">
              Save changes
            </button>
            <a
              onClick={modalClose.bind(this, "invite-user-modal")}
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

export default UserInvitationModal
