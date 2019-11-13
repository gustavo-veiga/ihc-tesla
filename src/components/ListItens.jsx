import React from "react"
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { Dashboard } from "@material-ui/icons"

const ListItens = () => {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </div>
  )
}

export default ListItens;
