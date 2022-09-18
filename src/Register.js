import React, { Component } from "react";
import { Link } from 'react-router-dom';


export class Register extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      class: "",
      roll: "",
      idNo: "",
      email: "",
      password: "",
    };
  }

  handleFullName = (event) => {
    this.setState({
      fullName: event.target.value,
    });
  };

  handleClass = (event) => {
    this.setState({
      class: event.target.value,
    });
  };

  handleRoll = (event) => {
    this.setState({
      roll: event.target.value,
    });
  };

  handleIdNo = (event) => {
    this.setState({
      idNo: event.target.value,
    });
  };

  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleRegister = (event) => {
    alert("Your Registration is Completed");
  };
  
  render() {
    return (
      <form onSubmit={this.handleRegister}>
        <h1>Student Registration</h1>
        <br />
        <div>
          <label>Student Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleFullName}
          />
        </div>
        <br />
        <div>
          <label>Student Class</label>
          <input
            type="number"
            value={this.state.class}
            onChange={this.handleClass}
          />
        </div>
        <br />
        <div>
          <label>Student Roll No.</label>
          <input
            type="number"
            value={this.state.roll}
            onChange={this.handleRoll}
          />
        </div>
        <br />
        <div>
          <label>Student ID No.</label>
          <input
            type="number"
            value={this.state.idNo}
            onChange={this.handleIdNo}
          />
        </div>
        <br />
        <div>
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleEmail}
          />
        </div>
        <br />
        <div>
          <label>Password</label>
          <input
            type="text"
            value={this.state.password}
            onChange={this.handlePassword}
          />
        </div>
        <br />
        <div>
        <Link to={'/login'}>
          <button onClick={() => this.handleRegister()}>Register</button>
          </Link>
        </div>
      </form>
    );
  }
}

export default Register;
