import React, { Component } from "react";

export default class UploadModal extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id={`upload${this.props._id}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Image for {this.props.title}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form
                action={`/api/img/upload?event=${this.props._id}`}
                method="post"
                encType="multipart/form-data">
                <div className="form-group">
                  <input className="form-control" type="file" name="image" />
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-success btn-block">
                  Upload
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
