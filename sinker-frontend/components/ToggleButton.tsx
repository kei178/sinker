import { useMutation, useQuery } from '@apollo/client';
import {
  LIST_HIDDEN_QUERY,
  ListHiddenData,
} from '../graphql/queries/list-hedden.query';
import TOGGLE_LIST_HIDDEN from '../graphql/mutations/toggle-list-hidden.mutation';
import { NextPage } from 'next';

interface ToggleButtonProps {}

const ToggleButton: NextPage<ToggleButtonProps> = () => {
  const {
    data: { listHidden },
  } = useQuery<ListHiddenData>(LIST_HIDDEN_QUERY);
  const [toggleListHidden] = useMutation(TOGGLE_LIST_HIDDEN);

  return (
    <button
      onClick={() => {
        toggleListHidden();
      }}
    >
      {listHidden ? 'Show' : 'Hide'}
    </button>
  );
};

export default ToggleButton;
