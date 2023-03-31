import styled, { css } from 'styled-components';
import KakaoIconSvg from '@/assets/images/kakao.svg';
import NaverIconSvg from '@/assets/images/naver.svg';
import InstagramIconSvg from '@/assets/images/instagram.svg';
import GoogleIconSvg from '@/assets/images/google.svg';

export const Wrapper = styled.div`
  width: 100%;
  height: 160px;

  position: absolute;
  top: 340px;
`;

export const Box = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  top: 36px;
  > * {
    margin: 0 14px;
  }
`;

export const Text = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      width: 100%;
      margin: 0 auto;

      position: relative;

      display: flex;
      align-items: center;
      text-align: center;
      overflow: hidden;

      color: ${colors.grayscale.dark};
      font-size: 12px;
      font-family: ${fonts.family.noto};
      font-weight: ${fonts.weight.medium};
      line-height: 12px;

      ::before,
      ::after {
        height: 1px;
        margin: 0px 16px;

        flex-grow: 1;

        content: '';
        font-size: 0px;
        line-height: 0px;

        background: ${colors.grayscale.gray300};
      }
    `;
  }}
`;

export const KakaoIcon = styled(KakaoIconSvg)``;
export const NaverIcon = styled(NaverIconSvg)``;
export const InstagramIcon = styled(InstagramIconSvg)``;
export const GoogleIcon = styled(GoogleIconSvg)``;
