import { gql } from "@apollo/client";

const POST_MESSAGE = gql`
  mutation PostMessage($user: String!, $content: String!) {
    postMessage(user: $user, content: $content)
  }
`;

export { POST_MESSAGE };
