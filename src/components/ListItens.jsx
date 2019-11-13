import React from "react"
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { Dashboard, MapSharp } from "@material-ui/icons"

const ListItens = () => {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <MapSharp />
        </ListItemIcon>
        <ListItemText primary="Mapa" />
      </ListItem>
    </div>
  )
}

export default ListItens;
