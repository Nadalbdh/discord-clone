import React from "react"

const SendMessageForm = ({
  handleSubmit,
  setBody,
  setChatFile,
  chatFile,
  body,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <p className="control">
          <textarea
            className="textarea"
            placeholder="Write message..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </p>
      </div>
      <div className="field">
        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <button className="button is-info" type="submit">
                Submit
              </button>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <div className="file is-right is-info">
                <label className="file-label">
                  <input
                    className="file-input"
                    type="file"
                    name="resume"
                    onChange={(e) => setChatFile(e.target.files[0])}
                  />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="material-icons">file_upload</i>
                    </span>
                  </span>
                  <span className="file-name">
                    {chatFile ? chatFile?.name : "Add a File..."}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </form>
  )
}

export default SendMessageForm
