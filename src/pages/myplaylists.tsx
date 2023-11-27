import { useEffect, useState } from 'react';
import * as style from '@/styles/pages-styles/myplaylists.style';
import { useRouter } from 'next/router';
import { usePlaylist } from '@/hooks/usePlaylist';
import { deletePlaylist } from '@/apis/playlist';
import { PlaylistType } from '@/constants/types/playlistTypes';
import { PlaylistBox } from '@/components/pages/home/playlist-box/PlaylistBox';

const MyPlaylists = () => {
  const router = useRouter();
  // top bar 버튼 관련 함수
  const onClickPrevButton = () => {
    router.back();
  };
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const onClickIsEditMode = () => {
    setIsEditMode(!isEditMode);
  };
  // playlist api
  const { myPlaylist } = usePlaylist();

  const [selectedPlaylist, setSelectedPlaylist] = useState<number[]>([]);
  const onToggleSelect = (playlistId: number) => {
    if (selectedPlaylist.includes(playlistId)) {
      setSelectedPlaylist((prevIds) =>
        prevIds.filter((id) => id !== playlistId),
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
              showTimeBadge={false}
              showAlarmButton={false}
              isEditMode={isEditMode}
              key={playlist.playlistId}
              playlist={playlist}
              onToggleSelect={onToggleSelect}
              onClickAlarmIcon={()=>{}}/>
          ))}
      </style.PlaylistContainer>
      {!isEditMode ? (
        <style.AddPlaylistButton />
      ) : (
        <style.DeletePlaylistButton onClick={onClickDeleteButton} />
      )}
    </style.Wrapper>
  );
};

export default MyPlaylists;
