import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/userActions';

function AdminMenu(props) {
  const logout = () => {
    props.logout();
  };

  const onEvents = () => {
    props.changeBol('showEvents', true);
    props.changeBol('showNews', false);
  };

  return (
    <div className='sticky-side'>
      <ul className='list-group list-group-flush mb-4'>
        <li className='list-group-item'>
          <span onClick={onEvents} className='nav-link-red cursor'>
            Events
          </span>
        </li>
      </ul>
      <button onClick={logout} className='btn btn-lg btn-outline-danger'>
        Logout
      </button>
    </div>
  );
}

export default connect(
  null,
  { logout }
)(AdminMenu);
