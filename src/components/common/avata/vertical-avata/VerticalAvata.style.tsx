import styled, { css } from 'styled-components';
import ProfileImg from '@/assets/images/profileImage.svg';
export const AvatarBox = styled.div`
  flex: '0 0 calc(33.33% - 10px)';
  margin: 15px;
  height: 126px;
  width: 89px;
  text-align: center;
`;

export const AvatartName = styled.div`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      font-family: ${fonts.family.noto};
      font-size: 12px;
      font-style: normal;
      font-weight: ${fonts.weight.medium};
      line-height: 16px;
    `;
  }}
`;
export const EmptyImage = styled(ProfileImg)`
  width: 89px;
  height: 89px;
`;
