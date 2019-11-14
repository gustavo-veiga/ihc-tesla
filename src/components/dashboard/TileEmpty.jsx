import React from "react";
import Tile from "./Tile";
import { Add } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(style => ({
  add: {
    flex: 1,
    flexDirection: 'collum',
    margin: '0 auto',
  }
}));

const TileEmpty = () => {
  const classes = useStyles();

  return (
    <Tile>
      <div className={classes.add}>
        <IconButton color="inherit">
          <Add />
        </IconButton>
      </div>
    </Tile>
  );
}

export default TileEmpty;
