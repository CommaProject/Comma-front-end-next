import { RoundInput } from '@/components/common/round-input';
import PrevIcon from '@/assets/images/prevArrow.svg';
import * as style from './TopBar.style';

interface TopBarProps {
  completedTextValue: string;
  onClickRoundInput: () => void;
  onClickEraseButton: () => void;
  onClickCategory: (category: string) => void;
  onClickPrev: () => void;
  switchActiveCategory: number;
  isHidden: boolean;
}
export const TopBar = ({
  completedTextValue,
  onClickRoundInput,
  onClickEraseButton,
  onClickCategory,
  onClickPrev,
  switchActiveCategory,
  isHidden,
}: TopBarProps) => (
  <style.StickySections>
    <style.TopBox>
      <PrevIcon onClick={onClickPrev} />
      <RoundInput
        completedTextValue={completedTextValue}
        onClickRoundInput={onClickRoundInput}
        handleEraseIconClick={onClickEraseButton}
        isCompletedSearch
        isHidden={isHidden}
      />
    </style.TopBox>
    <style.ButtonBox style={{ display: isHidden ? 'none' : 'flex' }}>
      <style.Button
        isActivate={switchActiveCategory === 0}
        onClick={() => onClickCategory('music')}
      >
        음악
      </style.Button>
      <style.Button
        isActivate={switchActiveCategory === 1}
        onClick={() => onClickCategory('artist')}
      >
        가수
      </style.Button>
      <style.Button
        isActivate={switchActiveCategory === 2}
        onClick={() => onClickCategory('commaUser')}
      >
        사용자
      </style.Button>
    </style.ButtonBox>
  </style.StickySections>
);
