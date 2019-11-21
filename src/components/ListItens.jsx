import React from "react";
import LinkItem from "../components/LinkItem";
import { useTranslation } from "react-i18next";
import { Dashboard, MapSharp, Chat } from "@material-ui/icons";

const ListItens = () => {
  const { t } = useTranslation();

  return (
    <div>
      <LinkItem to="/" text={t("Dashboard")}>
        <Dashboard />
      </LinkItem>
      <LinkItem to="/map" text={t("Map")}>
        <MapSharp />
      </LinkItem>
      <LinkItem to="/chat" text={t("Chat")}>
        <Chat />
      </LinkItem>
    </div>
  )
}

export default ListItens;
