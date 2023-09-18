import { RoundInput } from '../../common/round-input';
import * as style from './QuestTemplate.style';

interface QuestTemplateProps {
  onClickRoundInput: () => void;
}

export const QuestTemplate = ({ onClickRoundInput }: QuestTemplateProps) => (
  <style.Wrapper>
    <RoundInput
      completedTextValue=""
      onClickRoundInput={onClickRoundInput}
      handleEraseIconClick={() => {}}
      issearchResults={false}
      isHidden={false}
    />
  </style.Wrapper>
);
