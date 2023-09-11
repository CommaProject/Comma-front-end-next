import styled, { css } from 'styled-components';
import FastForwordIcon from '@/assets/images/fastForwordForMini.svg';
import RewindIcon from '@/assets/images/rewindForMini.svg';
import PlayIcon from '@/assets/images/playForMini.svg';
import PauseIcon from '@/assets/images/pauseForMini.svg';

export const Wrapper = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      background-color: ${colors.primary.main};
      width: 100%;
      height: 105px;
      display: flex;
      position: relative;
      justify-content: space-between;
    `;
  }}
`;

export const AlbumContainer = styled.div`
  margin-top: 15px;
  margin-left: 15px;
  align-items: flex-start;
  display: flex;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15px;
`;

export const SongName = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      color: ${colors.grayscale.dark};
      font-family: ${fonts.family.noto};
      font-size: 13px;
      font-style: normal;

      font-weight: ${fonts.weight.bold};
      line-height: 16px;

      margin-bottom: 7px;
    `;
  }}
`;
export const SingerName = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      color: ${colors.grayscale.white};
      font-family: ${fonts.family.noto};
      font-size: 13px;
      font-style: normal;

      font-weight: ${fonts.weight.bold};
      line-height: 16px;
    `;
  }}
`;

export const ButtonsContainer = styled.div`
  margin-bottom: auto;
  margin-top: 30px;
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

export const FastForwordButton = styled(FastForwordIcon)`
  cursor: pointer;
`;

export const RewindButton = styled(RewindIcon)`
  cursor: pointer;
`;

export const PlayButton = styled(PauseIcon)`
  cursor: pointer;
  margin-left: 20px;
  margin-right: 20px;
`;

export const PauseButton = styled(PlayIcon)`
  cursor: pointer;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.grayscale.gray300};
  position: absolute;
  top: 0;
  left: 0;
`;

interface ProgressBarFillProps {
  progress: number;
}

export const ProgressBarFill = styled.div<ProgressBarFillProps>`
  height: 100%;
  width: ${({ progress }) => `${progress}%`};
  background-color: ${({ theme }) => theme.colors.grayscale.dark};
  transition: width 0.3s ease;
`;
