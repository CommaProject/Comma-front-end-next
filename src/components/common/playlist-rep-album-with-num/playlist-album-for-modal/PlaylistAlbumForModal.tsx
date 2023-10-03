import styled, { css } from 'styled-components';
import { Album } from '@/components/common/album';

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
  </Container>
);

export default PlaylistAlbumForModal;
