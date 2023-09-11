<<<<<<< HEAD
import { useEffect, useState } from 'react';
import * as style from '@/styles/pages-styles/myplaylists.style';
import { useRouter } from 'next/router';
import { useGetMyPlaylists, deletePlaylist } from '../apis/playlist';
import { PlaylistType } from '../constants/types/playlistTypes';
import { PlaylistBox } from '../components/pages/home/playlist-box/PlaylistBox';

=======
import { useState } from 'react';
import * as style from '@/styles/pages-styles/myplaylists.style';
import { useRouter } from 'next/router';
import { useGetMyPlaylists } from '../apis/playlist';
import { PlaylistType } from '../constants/types/playlistTypes';
import { PlaylistBox } from '../components/pages/home/playlist-box/PlaylistBox';


>>>>>>> 7f708f55ef153eda30553c9657c58e56d29901b9
const MyPlaylists = () => {
  const router = useRouter();
  // top bar 버튼 관련 함수
  const onClickPrevButton = () => {
    router.back();
  };
<<<<<<< HEAD
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const onClickIsEditMode = () => {
    setIsEditMode(!isEditMode);
  };
  // playlist api
  const { myPlaylist } = useGetMyPlaylists();

  const [selectedPlaylist, setSelectedPlaylist] = useState<number[]>([]);
  const onToggleSelect = (playlistId: number) => {
    if (selectedPlaylist.includes(playlistId)) {
      setSelectedPlaylist((prevIds) =>
        prevIds.filter((id) => id !== playlistId)
      );
    } else {
      setSelectedPlaylist((prevIds) => [...prevIds, playlistId]);
    }
  };
  const onClickDeleteButton = async () => {
    console.log(selectedPlaylist);
    if (selectedPlaylist.length > 0) {
      const deleted = await deletePlaylist(selectedPlaylist);
      if (deleted) {
        // 삭제가 성공하면 다시 플레이리스트를 조회하여 업데이트
        // useGetMyPlaylists 훅을 통해 이미 업데이트되어 있음
      }
    }
  };

  useEffect(() => {
    if (isEditMode === false) {
      setSelectedPlaylist([]);
    }
  }, [isEditMode]);

=======
  const [isEditMode,setIsEditMode] = useState<boolean>(false);
  const onClickIsEditMode = () => {
    setIsEditMode(!isEditMode);
    
  }
  // playlist api
  const { myPlaylist } = useGetMyPlaylists();

  
>>>>>>> 7f708f55ef153eda30553c9657c58e56d29901b9
  return (
    <style.Wrapper>
      <style.TopBar>
        <style.PrevButton onClick={onClickPrevButton} />
        My playlist
        <style.SettingButton onClick={onClickIsEditMode} />
      </style.TopBar>
      <style.PlaylistContainer>
        {myPlaylist &&
          myPlaylist.map((playlist: PlaylistType) => (
            <PlaylistBox
<<<<<<< HEAD
              showTimeBadge={false}
              showAlarmButton={false}
              isEditMode={isEditMode}
              key={playlist.playlistId}
              playlist={playlist}
              onToggleSelect={onToggleSelect}
            />
          ))}
      </style.PlaylistContainer>
      {!isEditMode ? (
        <style.AddPlaylistButton />
      ) : (
        <style.DeletePlaylistButton onClick={onClickDeleteButton} />
      )}
=======
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
>>>>>>> 7f708f55ef153eda30553c9657c58e56d29901b9
    </style.Wrapper>
  );
};

<<<<<<< HEAD
export default MyPlaylists;
=======
export default MyPlaylists;
>>>>>>> 7f708f55ef153eda30553c9657c58e56d29901b9
