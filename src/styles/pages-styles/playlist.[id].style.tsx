import styled, { css } from 'styled-components';
import EditButton from '@/assets/images/edit.svg';
import { DeletePlaylistButton } from './myplaylists.style';

export const Wrapper = styled.div`
  width: 390px;
  height: 100%;
  position: relative;
`;

export const TopBar = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      width: 100%;
      height: 28px;

      margin: 20px 0px 30px;
      padding: 0 20px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      color: ${colors.grayscale.dark};
      font-family: ${fonts.family.noto};
      font-size: 17px;
      font-weight: ${fonts.weight.bold};
      line-height: 17px;
      text-align: center;
    `;
  }}
`;

export const Title = styled.input`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      color: ${colors.grayscale.dark};
      font-family: ${fonts.family.noto};
      font-size: 17px;
      font-weight: ${fonts.weight.bold};
      line-height: 17px;
      text-align: center;
    `;
  }}
`;
export const TimeInfo = styled.div`
  display: flex;
  flex-direction: row;
`;
export const EditBtn = styled(EditButton)`
  margin-left: 8px;
  margin-top: 2px;
`;
export const PlaylistInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto 20px 0;
`;

export const TimeText = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      height: 13px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      color: ${colors.grayscale.dark};
      font-family: ${fonts.family.pre};
      font-size: 13px;
      font-weight: ${fonts.weight.medium};
      line-height: 13px;
      text-align: center;
    `;
  }}
`;

export const AlbumList = styled.div`
  margin: auto 20px 0;
  padding-top: 20px;
  height: 100%;
`;

export const DeletePlaylistBtn = styled(DeletePlaylistButton)`
  margin-bottom: 20px;
  margin-left: 332px;
  position: sticky;
`;
