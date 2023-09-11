import { usePlaylist } from '@/hooks/usePlaylist';
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
  trackCount,
}: PlaylistRepAlbumWithNumProps) => {
  const { navigateToPlaylist } = usePlaylist();
  const onClickPlaylist = () => {
    navigateToPlaylist(playlistId);
  };

  return (
    <style.Container onClick={onClickPlaylist}>
<<<<<<< HEAD
      <Album url={repAlbumImageUrl} size={81.5} />
=======
      <Album url={repAlbumImageUrl} size={81.5} borderRadius={15}/>
>>>>>>> 7f708f55ef153eda30553c9657c58e56d29901b9
      {trackCount - 1 > 0 ? (
        <style.TrackNumInfo>+{trackCount - 1}</style.TrackNumInfo>
      ) : (
        ''
      )}
    </style.Container>
  );
};

export default PlaylistRepAlbumWithNum;
