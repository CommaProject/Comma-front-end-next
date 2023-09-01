import { Album } from '../album/Album';
import * as style from './PlaylistRepAlbumWithNum.style';

interface PlaylistRepAlbumWithNumProps {
  playlistId: number;
  repAlbumImageUrl: string;
  trackCount: number;
}
const PlaylistRepAlbumWithNum = ({
    playlistId,
    repAlbumImageUrl,
    trackCount
}: PlaylistRepAlbumWithNumProps) => {
  
  return (
    <style.Container>
      <Album url={repAlbumImageUrl} size={81.5} />
      {trackCount - 1 > 0 ? (
        <style.TrackNumInfo>+{trackCount - 1}</style.TrackNumInfo>
      ) : (
        ''
      )}
    </style.Container>
  );
};

export default PlaylistRepAlbumWithNum;
