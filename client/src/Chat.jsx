import React, { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useMutation,
} from "@apollo/client";
import Messages from "./Messages";
import { Button, Input } from "@mui/material";
import { POST_MESSAGE } from "./mutations";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const Chat = () => {
  const [state, setState] = useState({
    user: "John",
    content: "",
  });

  const [postMessage] = useMutation(POST_MESSAGE);

  const onSend = () => {
    if (state.content.length > 0) {
      postMessage({ variables: state });
    }

    setState({ ...state, content: "" });
  };

  return (
    <div>
      <Messages user={state.user} />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Input
          value={state.user}
          onChange={(e) => {
            setState({ ...state, user: e.target.value });
          }}
          disableUnderline={true}
          size="medium"
          style={{
            borderRadius: 10,
            border: "2px solid #efe6ea",
            paddingLeft: 8,
          }}
        />
        <Input
          value={state.content}
          onChange={(e) => {
            setState({ ...state, content: e.target.value });
          }}
          disableUnderline={true}
          style={{
            borderRadius: 10,
            border: "2px solid #efe6ea",
            paddingLeft: 8,
            marginLeft: 10,
            width: "60%",
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              onSend();
            }
          }}
        />
        <Button variant="contained" onClick={onSend}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default () => (
  <ApolloProvider client={client}>
    <Chat />
  </ApolloProvider>
);
