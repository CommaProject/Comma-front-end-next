import styled, { css } from 'styled-components';
import FastForwordIcon from '@/assets/images/fastForword.svg';
import RewindIcon from '@/assets/images/rewind.svg';
import PlayIcon from '@/assets/images/bigPlay.svg';
import PauseIcon from '@/assets/images/bigPause.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 200px;
`;

export const ProgressBar = styled.input`
  width: 317px;
  height: 2px;

  border: none;
  margin: 0 auto;
  ::-webkit-slider-runnable-track {
    color: pink;
  }
`;

export const FastForwordButton = styled(FastForwordIcon)`
  cursor: pointer;
`;

export const RewindButton = styled(RewindIcon)`
  cursor: pointer;
`;

export const PlayButton = styled(PauseIcon)`
  cursor: pointer;
  margin-left: 35px;
  margin-right: 35px;
`;

export const PauseButton = styled(PlayIcon)`
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  width: 317px;
  justify-content: center;
`;
export const CurrentTime = styled.div`
  text-align: left;
`;

export const DurationTime = styled.div`
  text-align: right;
`;
export const TimeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const TimeTypography = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      color: ${colors.grayscale.gray500};
      text-align: center;
      font-family: ${fonts.family.noto};
      font-size: 12px;
      font-style: normal;
      font-weight: ${fonts.weight.medium};
      line-height: 18px;
    `;
  }}
`;
