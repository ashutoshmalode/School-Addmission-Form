import React, { Component } from "react";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleLoginEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleLoginPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleLogin = (event) => {
    alert("Login Successfully");
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <h1>Student Login</h1>
        <br />
        <div>
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleLoginEmail}
          />
        </div>
        <br />
        <div>
          <label>Password</label>
          <input
            type="text"
            value={this.state.password}
            onChange={this.handleLoginPassword}
          />
        </div>
        <br />
        <div>
          <button>Login</button>
        </div>
      </form>
    );
  }
}

export default Login;
