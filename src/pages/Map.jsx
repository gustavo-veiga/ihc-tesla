import React from "react";
import Layout from "../components/Layout";
import { makeStyles } from "@material-ui/core";
import { Map, TileLayer } from "react-leaflet";

const useStyles = makeStyles(style => ({
  root: {
    height: `calc(100vh - 64px)`,
  }
}));

const MapPage = () => {
  const classes = useStyles();
  const position = [-22.7889, -43.3059]

  return (
    <Layout title="Mapa">
      <Map center={position} zoom={15} className={classes.root}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
    </Layout>
  )
}

export default MapPage;
