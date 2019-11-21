import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Grid, CssBaseline, Paper, TextField, FormControlLabel, Checkbox, Button, Link } from "@material-ui/core";

const randomTheme = () => {
  const themes = [
    {
      color: "#212121",
      background: "tesla-1.jpg",
    }, {
      color: "#c62828",
      background: "tesla-2.jpg",
    }, {
      color: "#1565c0",
      background: "tesla-3.jpg",
    }, {
      color: "#8d6e63",
      background: "tesla-4.jpg",
    }, {
      color: "#424242",
      background: "tesla-5.jpg",
    }, {
      color: "#d50000",
      background: "tesla-6.jpg",
    }, {
      color: "#ffb300",
      background: "tesla-7.jpg"
    }
  ]
  return themes[Math.floor(Math.random() * themes.length)];
}

const theme = randomTheme();

const themePalette = createMuiTheme({
  palette: {
    primary: {
      main: theme.color
    }
  }
});

const useStyles = makeStyles(style => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(assets/images/backgrounds/${theme.background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: style.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: style.spacing(1),
  },
  submit: {
    margin: style.spacing(3, 0, 2),
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={themePalette}>
      <Grid container component="main" className={classes.root}>
        <Helmet>
          <title>{t("Sign In")}</title>
          <meta name="theme-color" content={theme.color} />
        </Helmet>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={8} className={classes.image} />
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278.672 36.337">
              <g fill={theme.color}>
                <path d="M238.077 14.382v21.912h7.027V21.705h25.575v14.589h7.022V14.42l-39.624-.038M244.321 7.294h27.02c3.753-.746 6.544-4.058 7.331-7.262h-41.681c.779 3.205 3.611 6.516 7.33 7.262" />
                <path d="M216.795 36.308c3.543-1.502 5.449-4.1 6.179-7.14h-31.517l.02-29.118-7.065.02v36.238h32.383M131.874 7.196h24.954c3.762-1.093 6.921-3.959 7.691-7.136h-39.64v21.415h32.444v7.515l-25.449.02c-3.988 1.112-7.37 3.79-9.057 7.327l2.062-.038h39.415V14.355h-32.42V7.196" />
                <path d="M70.271 7.265h27.011c3.758-.749 6.551-4.058 7.334-7.265H62.937c.778 3.207 3.612 6.516 7.334 7.265M70.271 21.587h27.011c3.758-.741 6.551-4.053 7.334-7.262H62.937c.778 3.21 3.612 6.521 7.334 7.262M70.271 36.304h27.011c3.758-.747 6.551-4.058 7.334-7.263H62.937c.778 3.206 3.612 6.516 7.334 7.263" />
                <path d="M0 .088c.812 3.167 3.554 6.404 7.316 7.215h11.37l.58.229v28.691h7.1V7.532l.645-.229h11.38c3.804-.98 6.487-4.048 7.285-7.215v-.07H0v.07" />
              </g>
            </svg>
            <form className={classes.form} noValidate>
              <TextField label={t("Email")} id="email" name="email"
                variant="outlined" margin="normal" autoComplete="email" autoFocus fullWidth required
              />
              <TextField label={t("Password")} id="password" name="password" type="password"
                variant="outlined" margin="normal" autoComplete="current-password" fullWidth required
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={t("Remember Me")}
              />
              <Button type="submit" variant="contained" color="primary" className={classes.submit} fullWidth>
                {t("Sign In")}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">{t("Forgot password?")}</Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default LoginPage;
