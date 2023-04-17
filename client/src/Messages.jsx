import { useQuery } from "@apollo/client";
import React from "react";
import { GET_MESSAGES } from "./quries";

const Messages = ({ user }) => {
  const { data } = useQuery(GET_MESSAGES, { pollInterval: 500 });

  if (!data) {
    return null;
  }

  return (
    <>
      {data.messages.map(({ content, id, user: messageUser }) => {
        return (
          <div
            key={id}
            style={{
              display: "flex",
              justifyContent: messageUser === user ? "flex-end" : "flex-start",
              paddingBottom: "1em",
            }}
          >
            {messageUser !== user ? (
              <div
                style={{
                  height: 50,
                  width: 50,
                  marginRight: "0.5em",
                  border: "2px solid #efe6ea",
                  borderRadius: 25,
                  textAlign: "center",
                  fontSize: "18pt",
                  paddingTop: 20,
                }}
              >
                {messageUser.slice(0, 2).toUpperCase()}
              </div>
            ) : null}
            <div
              style={{
                background: messageUser === user ? "#58bf56" : "#efe6ea",
                color: messageUser === user ? "white" : "black",
                padding: "1em",
                borderRadius: "1em",
                maxWidth: "60%",
              }}
            >
              {content}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Messages;
