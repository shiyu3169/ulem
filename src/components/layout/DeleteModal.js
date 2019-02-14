import React, { Component } from "react";

export default class DeleteModal extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id={`delete${this.props._id}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Deleting Event {this.props.tile}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Are you sure to delete image for this event?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-outline-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
