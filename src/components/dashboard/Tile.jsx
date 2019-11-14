import React from "react";
import clsx from 'clsx';
import Title from "./Title"
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles(style => ({
  paper: {
    padding: style.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const Tile = ({ title, children }) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Grid item xs={12} md={4}>
      <Paper className={fixedHeightPaper}>
        <Title>{title}</Title>
        {children}
      </Paper>
    </Grid>
  );
}

Tile.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Tile;
