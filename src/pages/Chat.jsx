import React from "react";
import { Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/Layout";
import MessageBox from "../components/chat/MessageBox";
import MessageList from "../components/chat/MessageList";
import MessageEmpty from "../components/chat/MessageEmpty";
import chat from "../databases/chat.json"

const useStyles = makeStyles(style => ({
  root: {
    height: 'calc(100vh - 64px)'
  }
}));

const ChatPage = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [chatData, setChatData] = React.useState(false);

  return (
    <Layout title={t("Chat")}>
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
