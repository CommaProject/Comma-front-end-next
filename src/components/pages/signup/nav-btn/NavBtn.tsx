import DeactivateArrow from '@/assets/images/deactivateArrow.svg';
import ActivateArrow from '@/assets/images/activateArrow.svg';
import * as style from './NavBtn.style';

/**
 * 회원가입 페이지 Nav button의 상태와, 이벤트 관련 인터페이스
 */
interface NavBtnProps {
  /** 버튼의 상태 true -> 파란색 되면서 클릭가능 */
  isActivate: boolean;
  /** 다음페이지로 넘어가는 로직 (progress bar도 길어짐) */
  onClick: () => void;
}
export const NavBtn = ({ isActivate, onClick }: NavBtnProps) => (
  <style.Wrapper
    onClick={() => {
      if (isActivate) onClick();
    }}
  >
    {isActivate ? <ActivateArrow /> : <DeactivateArrow />}
  </style.Wrapper>
);
