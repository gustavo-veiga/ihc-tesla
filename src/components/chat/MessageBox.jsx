import React from 'react'
import InputSend from './InputSend'
import { MessageList } from 'react-chat-elements'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(style => ({
  root: {
    height: '100%',
    display: 'flex',
    paddingTop: '.7rem',
    flexDirection: 'column'
  },
  messages: {
    flexGrow: 1,
    overflowY: 'auto'
  }
}))

const MessageBox = ({ data }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <MessageList
        className={classes.messages}
        lockable
        toBottomHeight='100%'
        dataSource={data}
      />
      <InputSend />
    </div>
  )
}

export default MessageBox
