import React, { Component } from "react";
import { LockOutlined } from "@material-ui/icons";
import { Grid, CssBaseline, Paper, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Link, Box } from "@material-ui/core";

export default class Login extends Component {
  render() {
    return (
      <Grid container component="main">
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Avatar>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form noValidate>
            <TextField label="Email Address" id="email" name="email"
              variant="outlined" margin="normal" autoComplete="email" autoFocus fullWidth required
            />
            <TextField label="Password" id="password" name="password" type="password"
              variant="outlined" margin="normal" autoComplete="current-password" fullWidth required
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
            </Box>
          </form>
        </Grid>
      </Grid>
    )
  }
}
