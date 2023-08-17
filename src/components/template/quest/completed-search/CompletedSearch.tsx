import { RoundInput } from '@/components/common/round-input';
// eslint-disable-next-line import/no-unresolved
import PrevIcon from '@/assets/images/PrevArrow.svg';
import * as style from './CompletedSearch.style';

interface CompletedSearchProps {
  completedTextValue: string;
  onClickRoundInput: () => void;
}

export const CompletedSearch = ({
  completedTextValue,
  onClickRoundInput,
}: CompletedSearchProps) => (
  <style.Wrapper>
    <style.TopBox>
      <PrevIcon />
      <RoundInput
        completedTextValue={completedTextValue}
        onClickRoundInput={onClickRoundInput}
      />
    </style.TopBox>
  </style.Wrapper>
);
