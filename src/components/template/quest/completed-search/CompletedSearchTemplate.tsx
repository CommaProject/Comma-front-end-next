import { RoundInput } from '@/components/common/round-input';
// eslint-disable-next-line import/no-unresolved
import PrevIcon from '@/assets/images/PrevArrow.svg';
import * as style from './CompletedSearchTemplate.style';

interface CompletedSearchTemplateProps {
  completedTextValue: string;
  onClickRoundInput: () => void;
}

export const CompletedSearchTemplate = ({
  completedTextValue,
  onClickRoundInput,
}: CompletedSearchTemplateProps) => (
  <style.Wrapper>
    <style.TopBox>
      <PrevIcon />
      <RoundInput
        completedTextValue={completedTextValue}
        onClickRoundInput={onClickRoundInput}
        handleEraseIconClick={onClickRoundInput}
        isCompletedSearch
      />
    </style.TopBox>
  </style.Wrapper>
);
