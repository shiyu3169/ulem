import React, { Component } from 'react';
import InputGroup from '../layout/InputGroup';
import Axios from 'axios';

export default class EventNew extends Component {
  state = {
    noEndTime: false,
    title: '',
    start: '',
    end: '',
    venue: '',
    address: '',
    img: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onUpload = e => {
    // console.log(e.target.files[0]);
    this.setState({
      img: e.target.files[0]
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { title, start, end, venue, address } = this.state;
    const updatedBy = this.props.user._id;
    const event = {
      title,
      start: new Date(start),
      end: end ? new Date(end) : '',
      venue,
      address,
      updatedBy
    };
    if (event.noEndTime) {
      event.end = '';
    }
    const res = await this.createEvent(event);
    await this.uploadFile(res.data._id);
    await this.setState({
      noEndTime: false,
      title: '',
      start: '',
      end: '',
      venue: '',
      address: '',
      img: ''
    });
    this.props.showList();
  };

  uploadFile = async id => {
    const formData = new FormData();
    formData.append('file', this.state.img);
    await Axios.post(`/api/img/upload?event=${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  };

  onCancel = () => {
    this.setState({
      noEndTime: false,
      title: '',
      start: '',
      end: '',
      venue: '',
      address: ''
    });
    this.props.showList();
  };

  onCheckBox = e => {
    this.setState({
      [e.target.name]: e.target.checked
    });
  };

  // Create new event
  createEvent = async event => {
    const res = await Axios.post('/api/event', event);
    return res;
  };

  render() {
    return (
      <React.Fragment>
        <h4>Adding New Event</h4>
        <div className='container mt-4'>
          <form onSubmit={this.onSubmit}>
            <InputGroup
              label='Title'
              placeholder='Enter title here'
              required
              id='title'
              name='title'
              value={this.state.title}
              onChange={this.onChange}
            />
            <div className='input-group'>
              <input
                id='noEndTime'
                name='noEndTime'
                type='checkbox'
                onChange={this.onCheckBox}
              />
              <label htmlFor='noEndTime'>No End Time</label>
            </div>
            <InputGroup
              label='Start date / time'
              required
              id='start'
              name='start'
              onChange={this.onChange}
              type='datetime-local'
              value={this.state.start}
            />
            {!this.state.noEndTime && (
              <InputGroup
                label='End date / time'
                required
                id='end'
                onChange={this.onChange}
                name='end'
                type='datetime-local'
                value={this.state.end}
              />
            )}
            <InputGroup
              label='Venue name'
              id='venue'
              name='venue'
              onChange={this.onChange}
              value={this.state.venue}
            />
            <InputGroup
              label='Address'
              id='address'
              name='address'
              required
              value={this.state.address}
              onChange={this.onChange}
            />
            <InputGroup
              type='file'
              label='Media File'
              id='img'
              name='img'
              required
              onChange={this.onUpload}
            />
            <button
              type='button'
              onClick={this.onCancel}
              className='btn btn-lg btn-outline-danger'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='btn btn-lg btn-outline-success float-right'
            >
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
