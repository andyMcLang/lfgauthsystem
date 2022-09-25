import React, { Component } from "react";

import "./SignUp.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AuthServices from "../services/AuthServices";

const authService = new AuthServices();

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      Email: "",
      Password: "",
      //
      EmailFlag: false,
      PasswordFlag: false,
    };
  }

  handleValues = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, console.log("name", name, "value", value));
  };
  //
  //
  //
  //

  CheckValidity = () => {
    console.log("CheckValidity Calling...");
    this.setState({
      EmailFlag: false,
      PasswordFlag: false,
    });

    if (this.state.Email === "") {
      this.setState({ EmailFlag: true });
    }
    if (this.state.Password === "") {
      this.setState({ PasswordFlag: true });
    }
  };

  handleSubmit = (e) => {
    this.CheckValidity();
    if (this.state.Email !== "" && this.state.Password !== "") {
      console.log("Acceptable");

      let data = {
        email: this.state.Email,
        password: this.state.Password,
      };

      authService
        .SignIn(data)
        .then((data) => {
          console.log("data : ", data);
          if (data.data.isSuccess) {
            this.props.history.push("/HomePage");
            window.location.reload();
          } else {
            console.log("Something went wrong");
          }
        })
        .catch((error) => {
          console.log("Error : ", error);
        });
    } else {
      console.log("Not Acceptable");
    }
  };

  handleSignUp = (e) => {
    this.props.history.push("/");
    window.location.reload();
  };

  render() {
    console.log("State : ", this.state);
    return (
      <div className="SignUp-Container">
        <div className="SignUp-SubContainer">
          <div className="Header">Sign In</div>
          <div className="Body">
            <form className="form">
              <TextField
                error={this.state.EmailFlag}
                className="TextField"
                name="Email"
                label="Email"
                variant="outlined"
                size="small"
                values={this.state.Email}
                onChange={this.handleValues}
              />
              <TextField
                error={this.state.PasswordFlag}
                className="TextField"
                name="Password"
                label="Password"
                variant="outlined"
                size="small"
                type="password"
                value={this.state.Password}
                onChange={this.handleValues}
              />
            </form>
          </div>
          <div className="buttons">
            <Button className="Btn" color="primary" onClick={this.handleSignUp}>
              Create New Account
            </Button>
            <Button
              className="Btn"
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    );
  }
  // this.handleSubmit
  // onClick={window.location.reload()}
}
