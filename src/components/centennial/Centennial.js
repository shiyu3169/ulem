import React, { Component } from 'react';
import Milestone from '../about/Milestone';
import centennial from '../../img/logo.PNG';
import calendar from '../../img/calendar.jpg';

export default class Centennial extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <img
          src={centennial}
          alt='centennial'
          className='img-fluid cursor center'
        />
        <div className='row'>
          <div className='col-lg-2'>
            <img src={calendar} alt='Calender' />
          </div>
          <div className='col-lg-1' />
          <div className='col-lg-7'>
            <Milestone />
          </div>
          <div className='col-lg-2' />
        </div>
      </div>
    );
  }
}
