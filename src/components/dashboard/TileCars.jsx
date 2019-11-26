import React from 'react'
import Tile from './Tile'
import { Typography, Link } from '@material-ui/core'

const TileEmpty = () => {
  return (
    <Tile title='Carros' xs={12} md={4}>
      <Typography component='p' variant='h4'>
        $3,024.00
      </Typography>
      <Typography color='textSecondary'>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color='primary'>
          View balance
        </Link>
      </div>
    </Tile>
  )
}

export default TileEmpty
