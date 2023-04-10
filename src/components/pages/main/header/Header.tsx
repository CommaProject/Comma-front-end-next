import PrevIcon from '@/assets/images/PrevArrow.svg';
import * as style from './Header.style';

interface TopBarProps {
  onClickPrev: () => void;
  onClickNext: () => void;
}
const Header = ({ onClickPrev, onClickNext }: TopBarProps) => (
  <style.Wrapper>
    <style.Button isNext={false} onClick={onClickPrev}>
      <PrevIcon />
    </style.Button>
    <style.Button isNext onClick={onClickNext}>
      다음
    </style.Button>
  </style.Wrapper>
);

export default Header;
