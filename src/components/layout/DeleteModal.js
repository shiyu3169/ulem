import React, { Component } from "react";

export default class DeleteModal extends Component {
  onDelete(event) {
    this.props.removeEventImg(event._id);
  }

  render() {
    return (
      <div
        className="modal fade"
        id={`delete${this.props.event._id}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Deleting Event {this.props.event.title}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Are you sure to delete image for {this.props.event.title}?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={this.onDelete.bind(this, this.props.event)}
                type="button"
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
