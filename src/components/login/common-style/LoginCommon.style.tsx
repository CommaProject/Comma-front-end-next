import styled, { css } from 'styled-components';
import CommaIcon from '@/assets/images/commaIcon.svg';
import ShowPasswordSvg from '@/assets/images/showPassword.svg';
import HidePasswordSvg from '@/assets/images/hidePassword.svg';
import KakaoIconSvg from '@/assets/images/kakao.svg';
import NaverIconSvg from '@/assets/images/naver.svg';
import InstagramIconSvg from '@/assets/images/instagram.svg';
import GoogleIconSvg from '@/assets/images/google.svg';

export const LoginContainer = styled.div`
  position: relative;
  height: 844px;
  width: 390px;
`;

export const LoginMainIconWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 344px;
`;

export const LoginInputContainer = styled.div`
  position: relative;
  margin-bottom: 21px;
`;

export const ShowPasswordImgWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 16px;
`;

export const FindIdPwDivWrapper = styled.div`
  position: relative;
  margin-bottom: 44px;
`;

export const RegisterLinkWrapper = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      position: relative;
      margin-bottom: 78px;

      text-align: center;

      color: ${colors.grayscale.dark};
      font-family: ${fonts.family.noto};
      font-weight: ${fonts.weight.regular};
      font-size: 15px;
      line-height: 15px;

      > * {
        display: inline-block;
        padding-left: 5px;
        font-weight: ${fonts.weight.bold};
        text-decoration: underline;
      }
    `;
  }}
`;

export const SimpleLoginConatiner = styled.div`
  position: relative;
  width: 100%;
`;

export const SnsLoginImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  top: 36px;
  > * {
    margin: 0 14px;
  }
`;

export const LoginButtonWrapper = styled.div`
  position: relative;
  margin-bottom: 58px;
`;

// SVG

export const MainIcon = styled(CommaIcon)`
  position: relative;
  width: 153.49px;
  height: 124.99px;
  top: 134px;

  display: block;
  margin: 0 auto;

  justify-content: center;
`;

export const ShowPasswordIcon = styled(ShowPasswordSvg)`
  position: absolute;
  top: 54px;
  right: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const HidePasswordIcon = styled(HidePasswordSvg)`
  position: absolute;
  top: calc(
    54px - (4.43px / 2)
  ); // showPasswordSvg 와 HidePasswordSvg의 크기가 달라서 차이를 계산
  right: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const KakaoIcon = styled(KakaoIconSvg)``;
export const NaverIcon = styled(NaverIconSvg)``;
export const InstagramIcon = styled(InstagramIconSvg)``;
export const GoogleIcon = styled(GoogleIconSvg)``;
