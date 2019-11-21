import React from 'react'
import Tile from './Tile'
import { Add } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(style => ({
  containter: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const TileEmpty = () => {
  const classes = useStyles()

  return (
    <Tile>
      <div className={classes.containter}>
        <IconButton color='inherit'>
          <Add />
        </IconButton>
      </div>
    </Tile>
  )
}

export default TileEmpty
