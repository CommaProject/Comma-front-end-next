import PrevIcon from '@/assets/images/PrevArrow.svg';
import ProgressBar from '@/components/pages/signup/progress-bar';
import * as style from './TopBar.style';

/**
 * 상단바 관리를 위한 데이타
 */
interface TopBarProps {
  /** 상단바 이전, 다음 버튼 관리를 위한 페이지 step */
  step: number;
  /** 상단바 파란줄 관리를 위한 데이터 */
  topBarState: number;
  /** 이전 페이지로 가는 함수 */
  onClickPrev: () => void;
  /** 다음 페이지로 가는 함수 */
  onClickNext: () => void;
}
const TopBar = ({
  step,
  topBarState,
  onClickPrev,
  onClickNext,
}: TopBarProps) => (
  <style.Wrapper>
    <style.Box>
      {step === 0 ? (
        <div />
      ) : (
        <style.Button isNext={false} onClick={onClickPrev}>
          <PrevIcon />
        </style.Button>
      )}
      <style.Button isNext onClick={onClickNext}>
        다음
      </style.Button>
    </style.Box>
    <ProgressBar topBarState={topBarState} />
  </style.Wrapper>
);

export default TopBar;
