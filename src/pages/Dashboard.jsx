import React from "react";
import Layout from "../components/Layout";
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
          <Grid item xs={4}>
            <Paper>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Recent Deposits
              </Typography>
              <Typography component="p" variant="h4">
                $3,024.00
              </Typography>
              <Typography color="textSecondary" className={classes.depositContext}>
                on 15 March, 2019
              </Typography>
              <div>
                <Link color="primary" href="javascript:;">
                  View balance
                </Link>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default DashboardPage;
