import React from 'react'
import Tile from './Tile'
import { ResponsiveBar } from '@nivo/bar'
import { useTranslation } from 'react-i18next';

const data = [
  {
    "Mês": "Janeiro",
    "Norte": 65,
    "Sul": 21,
  },
  {
    "Mês": "Fevereiro",
    "Norte": 8,
    "Sul": 48,
  },
  {
    "Mês": "Março",
    "Norte": 90,
    "Sul": 40,
  },
  {
    "Mês": "Abril",
    "Norte": 81,
    "Sul": 19,
  }
  ,
  {
    "Mês": "Maio",
    "Norte": 56,
    "Sul": 96,
  },
  {
    "Mês": "Junho",
    "Norte": 55,
    "Sul": 27,
  },
  {
    "Mês": "Julho",
    "Norte": 40,
    "Sul": 100,
  }
]

const TileCarsUtilization = () => {
  const { t } = useTranslation()

  return (
    <Tile title={t('Use by region')} xs={12} md={8}>
      <ResponsiveBar
        data={data}
        margin={{ top: 10, right: 110, bottom: 70, left: 60 }}
        keys={['Norte', 'Sul']}
        indexBy='Mês'
        groupMode='grouped'
        colors={{ scheme: 'paired' }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20
          }
        ]}
      />
    </Tile>
  )
}

export default TileCarsUtilization
