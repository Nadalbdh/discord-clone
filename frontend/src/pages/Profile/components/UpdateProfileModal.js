import React from "react"

const UpdateProfileModal = ({
  modalClose,
  handleUpdateProfile,
  setName,
  profile,
  setEmail,
  setProfileInfo,
  setProfileBanner,
  setProfilePicture,
  profileBanner,
  profilePicture,
}) => {
  return (
    <div className="modal" id="update-profile-modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <form onSubmit={handleUpdateProfile}>
          <header className="modal-card-head">
            <p className="modal-card-title">Update Profile</p>
            <a
              onClick={modalClose.bind(this, "update-profile-modal")}
              className="delete"
              aria-label="close"
            ></a>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Your Name</label>
              <div className="control">
                <input
                  type="text"
                  value={profile.user.first_name}
                  className="input"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Your Email</label>
              <div className="control">
                <input
                  type="text"
                  value={profile.user.email}
                  className="input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Profile Info</label>
              <div className="control">
                <textarea
                  className="textarea"
                  onChange={(e) => setProfileInfo(e.target.value)}
                  value={profile.profile_info}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Change Profile Banner</label>
              <div className="control">
                <div className="level-right">
                  <div className="level-item">
                    <div className="file is-right is-info">
                      <label className="file-label">
                        <input
                          className="file-input"
                          type="file"
                          name="resume"
                          onChange={(e) => setProfileBanner(e.target.files[0])}
                        />
                        <span className="file-cta">
                          <span className="file-icon">
                            <i className="material-icons">file_upload</i>
                          </span>
                        </span>
                        <span className="file-name">
                          {profileBanner
                            ? profileBanner?.name
                            : "Add a File..."}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Change Profile Picture</label>
              <div className="control">
                <div className="level-right">
                  <div className="level-item">
                    <div className="file is-right is-info">
                      <label className="file-label">
                        <input
                          className="file-input"
                          type="file"
                          name="resume"
                          onChange={(e) => setProfilePicture(e.target.files[0])}
                        />
                        <span className="file-cta">
                          <span className="file-icon">
                            <i className="material-icons">file_upload</i>
                          </span>
                        </span>
                        <span className="file-name">
                          {profilePicture
                            ? profilePicture?.name
                            : "Add a File..."}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button type="submit" className="button is-success">
              Save changes
            </button>
            <a
              onClick={modalClose.bind(this, "add-category-modal")}
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

export default UpdateProfileModal
