import PrevIcon from '@/assets/images/prevArrow.svg';
import ProgressBar from '@/components/pages/signup/progress-bar';
import * as style from './TopBar.style';

interface TopBarProps {
  step: number;
  onClickPrev: () => void;
  onClickNext: () => void;
  isActivate: boolean;
}
const TopBar = ({
  step,
  onClickPrev,
  onClickNext,
  isActivate,
}: TopBarProps) => (
  <style.Wrapper>
    <style.Box>
      {step === 4 ? (
        <div />
      ) : (
        <style.Button isNext={false} onClick={onClickPrev}>
          <PrevIcon />
        </style.Button>
      )}
      {step !== 4 && (
        <style.Button
          isNext
          onClick={onClickNext}
          isActivate={isActivate}
          disabled={!isActivate}
        >
          다음
        </style.Button>
      )}
    </style.Box>
    <ProgressBar topBarState={(step + 1) * 20} />
  </style.Wrapper>
);

export default TopBar;
