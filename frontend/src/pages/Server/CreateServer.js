import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { createNewServer, getServerCategories } from "../../services/servers"

const CreateServer = () => {
  const [picture, setPicture] = useState()
  const [banner, setBanner] = useState()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [formCategory, setFormCategory] = useState()
  const [serverCategory, setServerCategory] = useState([])

  const history = useHistory()

  useEffect(() => {
    getServerCategories().then((response) => {
      setServerCategory(response)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    createNewServer(picture, banner, title, description, formCategory).then(
      (response) => {
        history.push("/")
      }
    )
  }

  return (
    <main>
      <div className="container pt-6">
        <div className="columns is-centered">
          <div className="column is-10">
            <div className="card">
              <div className="card-content">
                <form onSubmit={handleSubmit}>
                  <h3 className="title is-3">Discord - Create New Server</h3>

                  <div className="field">
                    <div id="picture-file" className="file has-name is-medium">
                      <label className="file-label">
                        <input
                          className="file-input"
                          type="file"
                          name="resume"
                          onChange={(e) => setPicture(e.target.files[0])}
                        />
                        <span className="file-cta">
                          <span className="file-icon">
                            <i className="material-icons">file_upload</i>
                          </span>
                          <span className="file-label">Choose a Picture…</span>
                        </span>
                        <span className="file-name">{picture?.name}</span>
                      </label>
                    </div>
                  </div>

                  <div className="field">
                    <div id="banner-file" className="file has-name is-medium">
                      <label className="file-label">
                        <input
                          className="file-input"
                          type="file"
                          name="resume"
                          onChange={(e) => setBanner(e.target.files[0])}
                        />
                        <span className="file-cta">
                          <span className="file-icon">
                            <i className="material-icons">file_upload</i>
                          </span>
                          <span className="file-label">Choose a Banner…</span>
                        </span>
                        <span className="file-name">{banner?.name}</span>
                      </label>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                      <textarea
                        type="text"
                        className="textarea"
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Category</label>
                    <div className="control">
                      <div className="select">
                        <select
                          defaultValue={"DEFAULT"}
                          onChange={(e) => setFormCategory(e.target.value)}
                        >
                          <option value="DEFAULT" disabled>
                            Choose a category...
                          </option>
                          {serverCategory.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="field is-grouped">
                    <div className="control">
                      <button type="submit" className="button is-link">
                        Submit
                      </button>
                    </div>
                    <div className="control">
                      <button
                        onClick={() => history.push("/")}
                        className="button is-link"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CreateServer
