import DeactivateArrow from '@/assets/images/deactivateArrow.svg';
import ActivateArrow from '@/assets/images/activateArrow.svg';
import { NavBtnStyle } from './NavBtn.style';

interface NavBtnProps {
  isActivate: boolean;
  onClick: () => void;
}
export const NavBtn = ({ isActivate, onClick }: NavBtnProps) => (
  <NavBtnStyle
    onClick={() => {
      if (isActivate) onClick();
    }}
  >
    {isActivate ? <ActivateArrow /> : <DeactivateArrow />}
  </NavBtnStyle>
);
