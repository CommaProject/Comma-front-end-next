import styled from 'styled-components';
import KakaoIconSvg from '@/assets/images/kakao.svg';
import NaverIconSvg from '@/assets/images/naver.svg';
import InstagramIconSvg from '@/assets/images/instagram.svg';
import GoogleIconSvg from '@/assets/images/google.svg';

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  top: 36px;
  > * {
    margin: 0 14px;
  }
`;

/** 따로 빼 놓은 이유는 아이콘 스펙이 변경 될 수 있다고 생각해서 여기에 작성 */
export const KakaoIcon = styled(KakaoIconSvg)``;
export const NaverIcon = styled(NaverIconSvg)``;
export const InstagramIcon = styled(InstagramIconSvg)``;
export const GoogleIcon = styled(GoogleIconSvg)``;
