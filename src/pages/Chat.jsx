import React from "react";
import Layout from "../components/Layout";
import MessageBox from "../components/chat/MessageBox";
import MessageList from "../components/chat/MessageList";
import MessageEmpty from "../components/chat/MessageEmpty";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import chat from "../databases/chat.json"

const useStyles = makeStyles(style => ({
  root: {
    height: 'calc(100vh - 64px)'
  }
}));

const ChatPage = () => {
  const classes = useStyles();
  const [chatData, setChatData] = React.useState(false);

  return (
    <Layout title="Chat">
      <Grid container className={classes.root}>
        <Grid item xs={3}>
          <MessageList data={chat}
            onSelectedChat={(data) => {
              setChatData(data);
            }}
          />
        </Grid>
        <Grid item xs={9}>
          {chatData
            ? <MessageBox data={chatData} />
            : <MessageEmpty />
          }
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ChatPage;
