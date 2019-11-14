import React from "react";
import Layout from "../components/Layout";
import TileCars from "../components/dashboard/TileCars"
import TileEmpty from "../components/dashboard/TileEmpty"
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles(style => ({
  container: {
    paddingTop: style.spacing(2),
    paddingBottom: style.spacing(2),
  },
}));

const DashboardPage = () => {
  const classes = useStyles();

  return (
    <Layout title="Dashboard">
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <TileCars />
          <TileEmpty />
        </Grid>
      </Container>
    </Layout>
  )
}

export default DashboardPage;
