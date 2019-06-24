import React, { Component } from 'react';
import InputGroup from '../layout/InputGroup';
import Axios from 'axios';
export default class Contact extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    content: '',
    error: false,
    success: false
  };

  componentDidMount() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      content: '',
      error: false,
      success: false
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      success: false
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, email, subject, content } = this.state;
    const contact = { name, email, subject, content };
    Axios.post('/api/contact', contact).then(
      this.setState({
        name: '',
        email: '',
        subject: '',
        content: '',
        error: false,
        success: true
      })
    );
  };

  render() {
    const { name, email, subject, content, error, success } = this.state;
    return (
      <div className='container mt-5'>
        <h1 className='font-red mt-4'>Contact Us</h1>
        {error && (
          <div className='alert alert-danger'>
            Something goes wrong, please check your input and try it again.
          </div>
        )}
        {success && (
          <div className='alert alert-success'>
            Thank you for your email, we will contact you as soon as possible.
          </div>
        )}
        <form onSubmit={this.onSubmit}>
          <InputGroup
            label='Name'
            name='name'
            onChange={this.onChange}
            required
            placeholder='enter your name...'
            value={name}
          />
          <InputGroup
            label='Email'
            type='email'
            name='email'
            placeholder='email that you want to be reached...'
            value={email}
            required
            onChange={this.onChange}
          />
          <InputGroup
            label='Subject'
            name='subject'
            value={subject}
            required
            onChange={this.onChange}
          />
          <InputGroup
            label='Content'
            rows='5'
            name='content'
            value={content}
            required
            onChange={this.onChange}
          />
          <button
            type='submit'
            className='btn btn-outline-danger btn-lg float-right'
          >
            Send
          </button>
        </form>
        <br />
      </div>
    );
  }
}
