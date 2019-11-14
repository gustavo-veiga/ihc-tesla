import React from "react";
import LinkItem from "../components/LinkItem";
import { Dashboard, MapSharp } from "@material-ui/icons";

const ListItens = () => {
  return (
    <div>
      <LinkItem to="/" text="Dashboard">
        <Dashboard />
      </LinkItem>
      <LinkItem to="/map" text="Mapa">
        <MapSharp />
      </LinkItem>
    </div>
  )
}

export default ListItens;
