import { gql } from '@apollo/client';

export const TOGGLE_LIST_HIDDEN = gql`
  mutation {
    toggleListHidden @client
  }
`;

export interface ToggleListHiddenData {
  listHidden: boolean;
}
