import styled, { css } from 'styled-components';
import PlaySVG from '@/assets/images/play.svg';
import PauseSVG from '@/assets/images/pause.svg';

export const Wrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 100%; //390px
      height: 52px;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: ${colors.primary.main};
      background: linear-gradient(
        to top,
        ${colors.grayscale.white},
        ${colors.primary.main}
      );
    `;
  }}
`;

export const PlayButton = styled(PlaySVG)`
  width: 20px;
`;
export const PauseButton = styled(PauseSVG)`
  width: 20px;
`;
export const ProgressBarContainer = styled.div`
  width: 80%;
`;

export const AudioContainer = styled.div`
  width: 80%;
  margin-left: 15px;

  line-height: 12px;
`;
export const ProgressBar = styled.input`
  width: 100%;
  height: 2px;

  border: none;

  ::-webkit-slider-runnable-track {
    color: pink;
  }
`;
export const Time = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      margin-top: 5px;

      display: flex;
      justify-content: space-between;

      font-size: 12px;
      color: ${colors.grayscale.gray500};
    `;
  }}
`;

export const CurrentTime = styled.div``;
export const DurationTime = styled.div``;
