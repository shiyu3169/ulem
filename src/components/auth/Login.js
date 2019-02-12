import React, { Component } from "react";
import InputGroup from "../layout/InputGroup";
import Axios from "axios";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
    alert: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const user = {
      username,
      password
    };

    Axios.post("/api/login", user)
      .then(res => {
        res.data.admin
          ? this.props.history.push("/admin")
          : this.props.history.push("/");
      })
      .catch(() => {
        this.setState({
          alert: true
        });
      });
  };

  render() {
    return (
      <div className="container">
        <h1 className="font-red mt-4 mb-4">Login</h1>
        {this.state.alert && (
          <div className="alert alert-danger">
            Invalid Username or Password, Please try it again
          </div>
        )}
        <form onSubmit={this.onSubmit}>
          <InputGroup
            id="useranme"
            name="username"
            label="Username"
            required
            onChange={this.onChange}
          />
          <InputGroup
            id="password"
            name="password"
            label="Password"
            type="password"
            required
            onChange={this.onChange}
          />
          <button className="btn btn-outline-danger">Login</button>
          <br />
          <br />
          <br />
          <br />
          <br />
        </form>
      </div>
    );
  }
}
