import React, { Component } from "react";
import "./SignUp.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class SignIn extends Component {
  render() {
    return (
      <div className="SignUp-Container">
        <div className="SignUp-SubContainer">
          <div className="Header">Sign In</div>
          <div className="Body">
            <form className="form">
              <TextField
                className="TextField"
                label="Username"
                variant="outlined"
                size="small"
              />
              <TextField
                className="TextField"
                label="Password"
                variant="outlined"
                size="small"
              />
            </form>
          </div>
          <div className="buttons">
            <Button className="Btn" color="primary">
              Create New Account
            </Button>
            <Button className="Btn" variant="contained" color="primary">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
