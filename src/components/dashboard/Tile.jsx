import React from 'react'
import clsx from 'clsx'
import Title from './Title'
import PropTypes from 'prop-types'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(style => ({
  paper: {
    padding: style.spacing(2),
    display: 'flex',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 240
  }
}))

const Tile = ({ xs, md, title, children }) => {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <Grid item xs={xs} md={md}>
      <Paper className={fixedHeightPaper}>
        {title !== undefined &&
          <Title>{title}</Title>}
        {children}
      </Paper>
    </Grid>
  )
}

Title.defaultProps = {
  xs: 12,
  md: 4
}

Tile.propTypes = {
  xs: PropTypes.number,
  md: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node
}

export default Tile
