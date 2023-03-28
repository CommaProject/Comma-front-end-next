import ProgressBar from '@/components/progress-bar';
import {
  BtnContainer,
  NextBtn,
  PrevBtn,
  TopBarContainer,
} from './TopBar.style';
import PrevIcon from '@/assets/images/PrevArrow.svg';

interface TopBarProps {
  step: number;
  onClickPrev: () => void;
  onClickNext: () => void;
}

const TopBar = ({ step, onClickPrev, onClickNext }: TopBarProps) => (
  <TopBarContainer>
    <BtnContainer>
      {step === 0 ? (
        <div />
      ) : (
        <PrevBtn onClick={onClickPrev}>
          <PrevIcon />
        </PrevBtn>
      )}
      <NextBtn onClick={onClickNext}>다음</NextBtn>
    </BtnContainer>
    <ProgressBar />
  </TopBarContainer>
);

export default TopBar;
