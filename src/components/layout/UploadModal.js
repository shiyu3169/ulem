import React, { Component } from 'react';
import axios from 'axios';

export default class UploadModal extends Component {
  state = {
    file: ''
  };

  onChange = e => {
    this.setState({
      file: e.target.files[0]
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file);

    const res = await axios.post(
      `/api/img/upload?event=${this.props._id}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    console.log(res.data);
  };
  render() {
    return (
      <div
        className='modal fade'
        id={`upload${this.props._id}`}
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5>Image for {this.props.title}</h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form
                // action={`/api/img/upload?event=${this.props._id}`}
                onSubmit={this.onSubmit}
                // method='post'
                // encType='multipart/form-data'
              >
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='file'
                    onChange={this.onChange}
                  />
                </div>
                <button className='btn btn-outline-success btn-block'>
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
