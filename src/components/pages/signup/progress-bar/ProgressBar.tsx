import * as style from './ProgressBar.style';

/**
 * 상단바 관리를 위한 인터페이스
 */
interface ProgressBarProps {
  /** 상단바 파란 선 관리 0 ~ 100 */
  topBarState: number;
}
const ProgressBar = ({ topBarState }: ProgressBarProps) => (
  <style.Wrapper>
    <style.Progress value={topBarState} max={100} />
  </style.Wrapper>
);

export default ProgressBar;
