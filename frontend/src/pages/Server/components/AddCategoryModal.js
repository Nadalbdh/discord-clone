import React from "react"

const AddCategoryModal = ({
  modalClose,
  handleSubmitCategory,
  setTitleNewCtg,
}) => {
  return (
    <div className="modal" id="add-category-modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <form onSubmit={handleSubmitCategory}>
          <header className="modal-card-head">
            <p className="modal-card-title">Create new category or group</p>
            <a
              onClick={modalClose.bind(this, "add-category-modal")}
              className="delete"
              aria-label="close"
            ></a>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  id="title"
                  type="text"
                  maxLength="25"
                  className="input"
                  onChange={(e) => setTitleNewCtg(e.target.value)}
                />
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

export default AddCategoryModal
