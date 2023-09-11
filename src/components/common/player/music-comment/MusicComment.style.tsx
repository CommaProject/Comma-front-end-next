import styled, { css } from 'styled-components';
import CancelIcon from '@/assets/images/cancel.svg';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 267px;
  height: 201px;
  margin: 0 auto;

  border-radius: 21px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const TextBox = styled.div`
  flex-shrink: 0;
`;

export const CommentTypography = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      color: ${colors.grayscale.dark};
      text-align: center;
      font-family: ${fonts.family.noto};
      font-size: 12px;
      font-style: normal;
      font-weight: ${fonts.weight.medium};
      line-height: 19px;
    `;
  }}
`;

export const CancelButton = styled(CancelIcon)`
  position: absolute;
  top: 12px;
  right: 16px;
`;

export const Button = styled.button`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      width: 35px;
      height: 21px;

      color: ${colors.grayscale.white};

      border-radius: 50px;
      background: ${colors.primary.main};

      margin-top: auto;

      margin-bottom: 11px;
    `;
  }}
`;
