import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import Event from "./Event";

export default class Admin extends Component {
  state = {
    user: "",
    showEvents: true,
    showNews: false
  };

  changeBol = (state, bol) => {
    this.setState({
      [state]: bol
    });
  };

  componentDidMount() {
    this.loggedIn();
  }

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
          <div className="container-fluid">
            <h1 className="font-red mt-4 text-center">Admin Panel</h1>
            <div className="row">
              <div className="col-md-2">
                <AdminMenu changeBol={this.changeBol} />
              </div>
              <div className="col-md-10">
                {this.state.showEvents && <Event user={this.state.user} />}
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
