import styled, { css } from 'styled-components';
import { Album } from '@/components/common/album';

import SelectedCheckSVG from '@/assets/images/selectedCheck.svg';

const Container = styled.div`
  width: 90px;
  position: relative;
  margin-right: 15px;
`;

const TrackNumInfo = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      width: 30px;

      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 60px;
      right: 0px;

      font-size: 12px;
      line-height: 12px;
      font-weight: ${fonts.weight.bold};
      color: ${colors.grayscale.white};
      background-color: ${colors.grayscale.gray300};
      border-radius: 19px;
    `;
  }}
`;
interface OverlayProps {
  isPlaylist: boolean;
}
export const Overlay = styled.div<OverlayProps>`
  ${({ isPlaylist }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 92px;
    height: 92px;
    background-color: rgba(104, 154, 255, 0.7);
    border-radius: 15px;
    z-index: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    display: ${isPlaylist ? '' : 'none'};
  `}
`;

interface PlaylistAlbumForModalProps {
  playlistId: number;
  repAlbumImageUrl: string;
  trackCount: number;
  onClickPlaylist: () => void;
}

const PlaylistAlbumForModal = ({
  playlistId,
  repAlbumImageUrl,
  trackCount,
  onClickPlaylist,
}: PlaylistAlbumForModalProps) => (
  <Container onClick={onClickPlaylist}>
    <Album url={repAlbumImageUrl} size={92} borderRadius={15} />
    {trackCount - 1 > 0 ? <TrackNumInfo>+{trackCount - 1}</TrackNumInfo> : ''}
    <Overlay isPlaylist={false}>
      <SelectedCheckSVG />
    </Overlay>
  </Container>
);

export default PlaylistAlbumForModal;
