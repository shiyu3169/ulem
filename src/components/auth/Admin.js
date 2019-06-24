import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import AdminMenu from './AdminMenu';
import Event from './Event';
import { connect } from 'react-redux';
import { loggedIn } from '../../actions/userActions';

class Admin extends Component {
  state = {
    user: '',
    showEvents: true,
    showNews: false
  };

  changeBol = (state, bol) => {
    this.setState({
      [state]: bol
    });
  };

  componentDidMount() {
    this.props.loggedIn();
  }

  render() {
    return (
      <React.Fragment>
        {(this.props.currentUser === 0 ||
          this.props.currentUser.admin === false) && <Redirect to='/login' />}
        {this.props.currentUser.admin === true && (
          <div className='container-fluid'>
            <h1 className='font-red mt-4 text-center'>Admin Panel</h1>
            <div className='row'>
              <div className='col-md-2'>
                <AdminMenu changeBol={this.changeBol} />
              </div>
              <div className='col-md-10'>
                {this.state.showEvents && (
                  <Event user={this.props.currentUser} />
                )}
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(
  mapStateToProps,
  { loggedIn }
)(Admin);
