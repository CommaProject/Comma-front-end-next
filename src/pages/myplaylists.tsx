import * as style from '@/styles/pages-styles/myplaylists.style';
import { useRouter } from 'next/router';
import { useGetMultiplePlaylists } from '../apis/playlist';
import { PlaylistType } from '../constants/types/playlistTypes';
import { PlaylistBox } from '../components/pages/home/playlist-box/PlaylistBox';

const MyPlaylists = () => {
  const router = useRouter();
  // top bar 버튼 관련 함수
  const onClickPrevButton = () => {
    router.back();
  };
  const onClickSetting = () => {};
  // playlist api
  const { playlist } = useGetMultiplePlaylists();
  return (
    <style.Wrapper>
      <style.TopBar>
        <style.PrevButton onClick={onClickPrevButton} />
        My playlist
        <style.SettingButton onClick={onClickSetting} />
      </style.TopBar>
      <style.PlaylistContainer>
        {playlist &&
          playlist.map((playlist: PlaylistType) => (
            <PlaylistBox
              showTimeBadge = {false}
              showAlarmButton = {false}
              isEditMode={false}
              key={playlist.playlistId}
              playlist={playlist}
            />
          ))}
      </style.PlaylistContainer>
    </style.Wrapper>
  );
};

export default MyPlaylists;
