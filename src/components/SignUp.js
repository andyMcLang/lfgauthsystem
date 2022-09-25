import React, { Component } from "react";
import "./SignUp.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AuthService from "../services/AuthServices";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const authService = new AuthService();

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      Email: "",
      Password: "",
      ConfirmPassword: "",
      EmailFlag: false,
      PasswordFlag: false,
      ConfirmPasswordFlag: false,
      open: false,
      Message: "",
    };
  }
  //

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
      ConfirmPasswordFlag: false,
    });

    if (this.state.Email === "") {
      this.setState({ EmailFlag: true });
    }
    if (this.state.Password === "") {
      this.setState({ PasswordFlag: true });
    }
    if (this.state.ConfirmPassword === "") {
      this.setState({ ConfirmPasswordFlag: true });
    }
  };

  handleSubmit = (e) => {
    this.CheckValidity();
    if (
      this.state.Email !== "" &&
      this.state.Password !== "" &&
      this.state.ConfirmPassword !== ""
    ) {
      console.log("Acceptable");

      let data = {
        email: this.state.Email,
        password: this.state.Password,
        confirmPassword: this.state.ConfirmPassword,
      };

      authService
        .SignUp(data)
        .then((data) => {
          console.log("data : ", data);
          if (data.data.isSuccess) {
            this.props.history.push("/SignIn");
            window.location.reload();
          } else {
            console.log("Something went wrong");
            this.setState({ open: true, Message: data.data.message });
          }
        })
        .catch((error) => {
          console.log("Error : ", error);
          this.setState({ open: true, Message: "Something went wrong!" });
        });
    } else {
      console.log("Not Acceptable");
      this.setState({ open: true, Message: "Some field are empty!" });
    }
  };

  handleSignIn = (e) => {
    this.props.history.push("/SignIn");
    window.location.reload();
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({
      open: false,
    });
  };

  render() {
    console.log("State : ", this.state);
    return (
      <div className="SignUp-Container">
        <div className="SignUp-SubContainer">
          <div className="Header">Sign Up</div>
          <div className="Body">
            <form className="form">
              <TextField
                error={this.state.EmailFlag}
                className="TextField"
                name="Email"
                label="Email"
                variant="outlined"
                size="small"
                value={this.state.Email}
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
              <TextField
                error={this.state.ConfirmPasswordFlag}
                className="TextField"
                name="ConfirmPassword"
                label="Confirm Password"
                variant="outlined"
                size="small"
                type="password"
                value={this.state.ConfirmPassword}
                onChange={this.handleValues}
              />
            </form>
          </div>
          <div className="buttons">
            <Button className="Btn" color="primary" onClick={this.handleSignIn}>
              Sign In
            </Button>
            <Button
              className="Btn"
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Sign Up
            </Button>
          </div>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={this.state.Message}
          action={
            <React.Fragment>
              <Button color="secondary" size="small" onClick={this.handleClose}>
                UNDO
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={this.handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
    );
  }
}
