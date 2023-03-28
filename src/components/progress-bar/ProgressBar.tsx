import { useAtom } from 'jotai';
import { signUpStateAtom } from '~/src/stores/atoms';
import { Background, Container, Progress } from './ProgressBar.style';

const ProgressBar = () => {
  const [{ percent }] = useAtom(signUpStateAtom);
  return (
    <Container>
      <Background />
      <Progress percent={percent} />
    </Container>
  );
};

export default ProgressBar;
