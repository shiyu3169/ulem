import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  componentDidMount() {
    this.loggedIn();
  }

  logout = () => {
    Axios.post("/api/logout").then(() => {
      this.props.history.push("/");
    });
  };

  loggedIn = async () => {
    const res = await Axios.post("/api/loggedIn");
    this.setState({
      user: res.data
    });
  };

  render() {
    return (
      <React.Fragment>
        {(this.state.user === 0 || this.state.user.admin === false) && (
          <Redirect to="/login" />
        )}
        {this.state.user.admin === true && (
          <div>
            <h1 className="font-red mt-4 mb-4">Admin Panel</h1>
            <button
              onClick={this.logout}
              className="btn btn-lg btn-outline-danger">
              Logout
            </button>
          </div>
        )}
      </React.Fragment>
    );
  }
}
