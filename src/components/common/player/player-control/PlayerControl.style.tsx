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
`;

export const PauseButton = styled(PlayIcon)`
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 317px;
  justify-content: center;
`;
