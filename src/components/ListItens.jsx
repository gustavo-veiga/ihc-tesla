import React from "react";
import LinkItem from "../components/LinkItem";
import { Dashboard, MapSharp, Chat } from "@material-ui/icons";

const ListItens = () => {
  return (
    <div>
      <LinkItem to="/" text="Dashboard">
        <Dashboard />
      </LinkItem>
      <LinkItem to="/map" text="Mapa">
        <MapSharp />
      </LinkItem>
      <LinkItem to="/chat" text="Chat">
        <Chat />
      </LinkItem>
    </div>
  )
}

export default ListItens;
