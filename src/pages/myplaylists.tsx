import * as style from '@/styles/pages-styles/myplaylists.style';
import { useRouter } from 'next/router';
import { useGetMultiplePlaylists } from '../apis/playlist';
import { PlaylistType } from '../constants/types/playlistTypes';
import { PlaylistBox } from '../components/pages/home/playlist-box/PlaylistBox';
import { useState } from 'react';

const MyPlaylists = () => {
  const router = useRouter();
  // top bar 버튼 관련 함수
  const onClickPrevButton = () => {
    router.back();
  };
  const [isEditMode,setIsEditMode] = useState<boolean>(false);
  const onClickIsEditMode = () => {
    setIsEditMode(!isEditMode);
    
  }
  // playlist api
  const { playlist } = useGetMultiplePlaylists();

  
  return (
    <style.Wrapper>
      <style.TopBar>
        <style.PrevButton onClick={onClickPrevButton} />
        My playlist
        <style.SettingButton onClick={onClickIsEditMode} />
      </style.TopBar>
      <style.PlaylistContainer>
        {playlist &&
          playlist.map((playlist: PlaylistType) => (
            <PlaylistBox
              showTimeBadge = {false}
              showAlarmButton = {false}
              isEditMode={isEditMode}
              key={playlist.playlistId}
              playlist={playlist}
            />
          ))}
      </style.PlaylistContainer>
      {!isEditMode?
       <style.AddPlaylistButton/> : <style.DeletePlaylistButton/>
       }
    </style.Wrapper>
  );
};

export default MyPlaylists;
