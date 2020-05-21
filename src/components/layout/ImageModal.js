import React from "react";
import breakfastGala from "../../assets/image/Breakfast-Gala.png";

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
            <img
              src={breakfastGala}
              className="img-fluid"
              alt="breakfast gala"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
