import PrevIcon from '@/assets/images/PrevArrow.svg';
import ProgressBar from '@/components/progress-bar';
import {
  BtnContainer,
  NextBtn,
  PrevBtn,
  TopBarContainer,
} from './TopBar.style';

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
    <ProgressBar topBarState={topBarState} />
  </TopBarContainer>
);

export default TopBar;
