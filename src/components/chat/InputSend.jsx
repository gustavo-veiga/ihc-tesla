import React from "react";
import { Send } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, InputBase, Divider, IconButton } from "@material-ui/core";

const useStyles = makeStyles(style => ({
  root: {
    width: 'calc(100% - 2rem)',
    display: 'flex',
    margin: '1rem',
    padding: '2px 4px',
    alignItems: 'center',
  },
  input: {
    marginLeft: style.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  }
}));

const InputSend = () => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Envie sua mensagem"
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="send">
        <Send />
      </IconButton>
    </Paper>
  )
}

export default InputSend;
