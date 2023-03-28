import { Background, Container, Progress } from './ProgressBar.style';

/**
 * 상단바 관리를 위한 인터페이스
 */
interface ProgressBarProps {
  /** 상단바 파란 선 관리용 데이터 */
  topBarState: number;
}
const ProgressBar = ({ topBarState }: ProgressBarProps) => (
  <Container>
    <Background />
    <Progress percent={topBarState} />
  </Container>
);

export default ProgressBar;
