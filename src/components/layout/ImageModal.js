import React from "react";


const ImageModal = ({ id, title, img }) => {
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
          <div className="modal-body image-modal">
            <a target="__blank" href="https://theulem.square.site/">
              <img
                src={img}
                className="img-fluid"
                alt="breakfast gala"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
