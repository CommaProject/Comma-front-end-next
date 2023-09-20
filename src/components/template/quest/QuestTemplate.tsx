import { RoundInput } from '../../common/round-input';
import { SwiperAlbum } from '../../pages/quest/swiper-album';
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
      isCompletedSearch={false}
      isHidden={false}
    />
    <SwiperAlbum />
  </style.Wrapper>
);
