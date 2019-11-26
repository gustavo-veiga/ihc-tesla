import React from 'react'
import Tile from './Tile'
import { ResponsiveLine } from '@nivo/line'

const data = [
  {
    id: 'Rodando',
    color: 'hsl(226, 70%, 50%)',
    data: [
      {
        x: '00:00',
        y: '5'
      },
      {
        x: '00:05',
        y: '6'
      },
      {
        x: '00:10',
        y: '2'
      }
    ]
  }
]

const TileCarsUtilization = () => {
  return (
    <Tile title='Utilização de Carros' xs={12} md={4}>
      <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 110, bottom: 70, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
        axisTop={null}
        axisRight={null}
      />
    </Tile>
  )
}

export default TileCarsUtilization
