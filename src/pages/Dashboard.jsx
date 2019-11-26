import React from 'react'
import Layout from '../components/Layout'
import TileCars from '../components/dashboard/TileCars'
import TileCarsRegion from '../components/dashboard/TileCarsRegion'
import TileCarsUtilization from '../components/dashboard/TileCarsUtilization'
import TileEmpty from '../components/dashboard/TileEmpty'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'

const useStyles = makeStyles(style => ({
  container: {
    paddingTop: style.spacing(2),
    paddingBottom: style.spacing(2)
  }
}))

const DashboardPage = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Layout title={t('Dashboard')}>
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={3}>
          <TileCars />
          <TileCarsRegion />
          <TileCarsUtilization />
          <TileEmpty />
        </Grid>
      </Container>
    </Layout>
  )
}

export default DashboardPage
