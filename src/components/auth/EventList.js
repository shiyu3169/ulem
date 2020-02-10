import React, { Component } from 'react';
import Axios from 'axios';
import Pages from '../layout/Pages';
import DeleteModal from '../layout/DeleteModal';
import UploadModal from '../layout/UploadModal';
import moment from 'moment';
import $ from 'jquery';

export default class EventList extends Component {
  state = {
    length: 0,
    events: [],
    page: 1
  };

  removeEventImg = async id => {
    await Axios.get(`/api/event/removeImg/${id}`);
    $(`#delete${id}`).modal('hide');
    this.getEvents(this.state.page);
  };

  countEvents = () => {
    Axios.get('/api/event/length').then(res => {
      this.setState({
        length: parseInt(res.data)
      });
    });
  };

  checkEvent = id => {
    this.props.showEditing(id);
  };

  getEvents = page => {
    Axios.get(`/api/events/${page}`).then(res => {
      this.setState({
        events: res.data
      });
    });
  };

  handleFeature = async event => {
    event.featured = !event.featured;
    await Axios.post(`/api/event/${event._id}`, event);
  };

  changePage = page => {
    this.setState({
      page
    });
    this.getEvents(page);
  };

  componentDidMount() {
    this.countEvents();
    this.getEvents(this.state.page);
  }

  render() {
    return (
      <React.Fragment>
        <h4>
          Events
          <button
            onClick={this.props.showAdding}
            className='btn btn-outline-danger ml-4'
          >
            New Event
          </button>
        </h4>
        <div className='container'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Featured</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Image</th>
                <th>Last Update</th>
              </tr>
            </thead>
            <tbody>
              {this.state.events.map(event => (
                <tr key={event._id}>
                  <td
                    className='cursor'
                    onClick={this.checkEvent.bind(this, event._id)}
                  >
                    {event.title}
                  </td>
                  <td className='text-center'>
                    <input
                      type='checkbox'
                      checked={event.featured}
                      onChange={this.handleFeature.bind(this, event)}
                    />
                  </td>
                  <td>{moment(event.start).format('YYYY-MM-DDTkk:mm')}</td>

                  <td>
                    {event.end
                      ? moment(event.end).format('YYYY-MM-DDTkk:mm')
                      : 'N/A'}
                  </td>

                  <td>
                    {event.img ? (
                      <button
                        type='button'
                        className='btn btn-outline-danger'
                        data-toggle='modal'
                        data-target={`#delete${event._id}`}
                      >
                        Delete
                      </button>
                    ) : (
                      <button
                        type='button'
                        className='btn btn-outline-success'
                        data-toggle='modal'
                        data-target={`#upload${event._id}`}
                      >
                        Upload
                      </button>
                    )}
                    <DeleteModal
                      event={event}
                      user={this.props.user}
                      removeEventImg={this.removeEventImg}
                    />
                    <UploadModal _id={event._id} title={event.title} />
                  </td>
                  <td>
                    Last updated by {event.updatedBy.username} @{' '}
                    {moment(event.dateModified).format('YYYY-MM-DDTkk:mm')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pages
          length={this.state.length}
          page={this.state.page}
          changePage={this.changePage}
        />
      </React.Fragment>
    );
  }
}
