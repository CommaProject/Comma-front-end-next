import { RoundInput } from '@/components/common/round-input';
import PrevIcon from '@/assets/images/prevArrow.svg';
import * as style from './TopBar.style';

interface TopBarProps {
  completedTextValue: string;
  onClickRoundInput: () => void;
  onClickEraseButton: () => void;
  onClickCategory: (category: string) => void;
  onClickPrev: () => void;
  category: string;
  isHidden: boolean;
}
export const TopBar = ({
  completedTextValue,
  onClickRoundInput,
  onClickEraseButton,
  onClickCategory,
  onClickPrev,
  category,
  isHidden,
}: TopBarProps) => (
  <style.StickySections>
    <style.TopBox>
      <PrevIcon onClick={onClickPrev} />
      <RoundInput
        completedTextValue={completedTextValue}
        onClickRoundInput={onClickRoundInput}
        handleEraseIconClick={onClickEraseButton}
        issearchResults
        isHidden={isHidden}
      />
    </style.TopBox>
    <style.ButtonBox style={{ display: isHidden ? 'none' : 'flex' }}>
      <style.Button
        isActivate={category === 'music'}
        onClick={() => onClickCategory('music')}
      >
        음악
      </style.Button>
      <style.Button
        isActivate={category === 'artist'}
        onClick={() => onClickCategory('artist')}
      >
        가수
      </style.Button>
      <style.Button
        isActivate={category === 'commaUser'}
        onClick={() => onClickCategory('commaUser')}
      >
        사용자
      </style.Button>
    </style.ButtonBox>
  </style.StickySections>
);
