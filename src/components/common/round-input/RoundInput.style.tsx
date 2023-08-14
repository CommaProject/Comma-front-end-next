import styled, { css } from 'styled-components';
import SearchIconSVG from '@/assets/images/Search.svg';

export const Wrapper = styled.div`
  position: relative;
  width: 360px;
  height: 32px;
`;

export const Input = styled.input`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding-left: 40px;

      border: 2px solid ${colors.primary.main};
      border-radius: 50px;

      &:focus {
        outline: none;
        border: 2px solid ${colors.primary.main};
      }
    `;
  }}
`;

export const SearchIcon = styled(SearchIconSVG)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;
