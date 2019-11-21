import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

const useStyles = makeStyles(style => ({
  link: {
    color: '#000',
    textDecoration: 'none'
  }
}))

const LinkItem = ({ to, text, children }) => {
  const classes = useStyles()

  return (
    <Link to={to} className={classes.link}>
      <ListItem button>
        <ListItemIcon>
          {children}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  )
}

export default LinkItem
