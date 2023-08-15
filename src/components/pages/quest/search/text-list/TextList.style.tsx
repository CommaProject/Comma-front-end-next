import styled, { css } from 'styled-components';
import whiteCancelSVG from '@/assets/images/whiteCancel.svg';

export const Wrapper = styled.div`
  position: relative;
  margin-top: 18px;
`;

export const SearchItemBox = styled.div``;

export const SearchItem = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      color: ${colors.grayscale.white};
      font-family: ${fonts.family.pre};
      font-weight: ${fonts.weight.medium};
      font-size: 15px;
      padding-bottom: 26px;
      display: flex;
      align-items: center;
    `;
  }}
`;

export const DeleteSearchItem = styled(whiteCancelSVG)`
  margin-left: auto;
`;
