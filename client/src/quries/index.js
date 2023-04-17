import { gql } from "@apollo/client";

const GET_MESSAGES = gql`
  query {
    messages {
      id
      user
      content
    }
  }
`;

export { GET_MESSAGES };
