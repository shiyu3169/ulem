import React from "react"

import styles from "./ImageModal.module.css"

import modalImg from "../../../assets/image/LOL_MMo.jpeg"

const ImageModal = ({ id, title }) => {
  return (
    <div
      className="modal fade bd-example-modal-lg"
      id={id}
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div>
            <a
              href="https://bit.ly/2EjadoV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={styles.modalImage} src={modalImg} alt="modal" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageModal
