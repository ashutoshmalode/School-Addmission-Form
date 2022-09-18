import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      mobile: "",
      percent: "",
    };
  }

  handleInputChange = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value,
    });
  };

  handleSubmit = (event) => {
    alert("Your form is submited");
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <h1>MPHS Addmission Form</h1>
        <br />
        <div>
          <label>Student Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) =>
              this.handleInputChange("name", event.target.value)
            }
          />
        </div>
        <br />
        <div>
          <label>Student Address</label>
          <input
            type="text"
            value={this.state.address}
            onChange={(event) =>
              this.handleInputChange("address", event.target.value)
            }
          />
        </div>
        <br />
        <div>
          <label>Parents Mob. No.</label>
          <input
            type="number"
            value={this.state.mobile}
            onChange={(event) =>
              this.handleInputChange("mobile", event.target.value)
            }
          />
        </div>
        <br />
        <div>
          <label>Last Year %</label>
          <input
            type="number"
            value={this.state.percent}
            onChange={(event) =>
              this.handleInputChange("percent", event.target.value)
            }
          />
        </div>
        <br />
        <div>
          <Link to={"/register"}>
            <button onClick={() => this.handleSubmit()}>Submit</button>
          </Link>
        </div>
      </form>
    );
  }
}

export default Home;
