import styled, { css } from 'styled-components';
import SearchIconSVG from '@/assets/images/whiteSearch.svg';
import CancelSVG from '@/assets/images/cancel.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      color: ${colors.grayscale.white};
      height: 20px;
      font-size: 17px;
      width: 100%;
      height: 100%;
      padding-left: 25px;
      background-color: ${colors.grayscale.dark};
      border: 0px;
      border-bottom: 2px solid ${colors.grayscale.white};

      &:focus {
        outline: none;
        border-bottom: 2px solid ${colors.grayscale.white};
      }
    `;
  }}
`;

export const SearchIcon = styled(SearchIconSVG)`
  ${({ theme }) => {
    const { colors } = theme;
    return `
      position: absolute;
  
    `;
  }}
`;

export const EraseIcon = styled(CancelSVG)`
  ${({ theme }) => {
    const { colors } = theme;
    return `
      right: 30px; 
      position: absolute;
      cursor: pointer;
      margin-right: 9px;
    `;
  }}
`;

export const CancelButton = styled.button`
  right: 0;
  position: absolute;
  background: transparent;
  border: none;
  font-size: 16px;
  color: red;
  cursor: pointer;
`;
