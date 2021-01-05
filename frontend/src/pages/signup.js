import React, { useState } from "react";
import PropTypes from "prop-types";

// MUI
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  ...theme.spread,
});

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userId, setUserId] = useState("");

  const { classes } = props;

  const handleChange = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "confirmPassword":
        setConfirmPassword(event.target.value);
        break;
      case "userId":
        setUserId(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password, confirmPassword, userId);
  };

  return (
    <Grid container className={classes.form}>
      <Grid item sm />
      <Grid item sm>
        <p>insert logo here</p>
        <Typography variant="h3" className={classes.pageTitle}>
          Signup
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            className={classes.textField}
            onChange={handleChange}
            value={email}
            fullWidth
          />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            className={classes.textField}
            onChange={handleChange}
            value={password}
            fullWidth
          />
          <TextField
            id="confirmPassword"
            name="confirmPassword"
            type="confirmPassword"
            label="Confirm Password"
            className={classes.textField}
            onChange={handleChange}
            value={confirmPassword}
            fullWidth
          />
          <TextField
            id="userId"
            name="userId"
            type="text"
            label="Nickname"
            className={classes.textField}
            onChange={handleChange}
            value={userId}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Signup
          </Button>
        </form>
        <small>
          Already have an account? Login <Link to="/login">here</Link>
        </small>
      </Grid>
      <Grid item sm />
    </Grid>
  );
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);
