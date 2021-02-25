import { gql } from '@apollo/client';

const TOGGLE_LIST_HIDDEN = gql`
  mutation {
    toggleListHidden @client
  }
`;

export default TOGGLE_LIST_HIDDEN;
