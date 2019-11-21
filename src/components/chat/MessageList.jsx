import React from 'react'
import { ChatList } from 'react-chat-elements'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    overflowY: 'auto',
    borderRight: '1px solid rgba(0,0,0,.05)'
  }
}))

const MessageList = ({ data, onSelectedChat }) => {
  const classes = useStyles()

  return (
    <ChatList
      className={classes.root}
      dataSource={data}
      onClick={({ messages }) => {
        onSelectedChat(messages)
      }}
    />
  )
}

export default MessageList
