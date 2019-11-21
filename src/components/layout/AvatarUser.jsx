import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AccountCircle, Person, Settings, ExitToApp } from '@material-ui/icons'
import { IconButton, Avatar, Popover, Divider, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  iconUser: {
    width: '100%',
    height: '100%'
  }
}))

const AvatarUser = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <IconButton color='inherit' variant='contained' aria-describedby={id} onClick={handleClick}>
        <Avatar>
          <AccountCircle className={classes.iconUser} />
        </Avatar>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <List component='nav' aria-label='user settings'>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Person />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Elon Musk' secondary='Operador Atendente' />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary='Perfil' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary='Configurações' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary='Sair' />
          </ListItem>
        </List>
      </Popover>
    </div>
  )
}

export default AvatarUser
