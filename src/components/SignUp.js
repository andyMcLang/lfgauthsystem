// https://youtu.be/UrPsLzOvxsY
// kohta 1:28:42
import React, { Component } from "react";
import "./SignUp.scss";
import TextField from "@material-ui/core/TextField";

export default class SignUp extends Component {
  render() {
    return (
      <div className="SignUp-Container">
        <div className="SignUp-SubContainer">
          <div className="Header">Sign Up</div>
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
              <TextField
                className="TextField"
                label="Confirm Password"
                variant="outlined"
                size="small"
              />
            </form>
          </div>
          <div className="buttons"></div>
        </div>
      </div>
    );
  }
}
