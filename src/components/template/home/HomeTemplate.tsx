import { useRouter } from 'next/router';
import * as style from '~/src/components/template/home/HomeTemplate.style';
import PlaylistBox from '@/components/pages/home/playlist-box';
import { PlaylistType } from '@/constants/types/playlistTypes';
import React from 'react';

interface HomeTemplateProps {
  
  isPlaylistAvailable:boolean;
  isCommaPlaylistAvailable: boolean;
  isEditMode: boolean;
  
  onClickIsEditMode : () => void;
  commaPlaylist: PlaylistType[];
  
}


export const HomeTemplate = ({
  
  isPlaylistAvailable,
  isCommaPlaylistAvailable,
  isEditMode,
  onClickIsEditMode,
  commaPlaylist,
}: HomeTemplateProps) => {
  
  const router = useRouter();
  const currentFirstPath = router.pathname.split('/')[1];
  const onClickAddPlaylistButton = () => {
    if(isPlaylistAvailable){
  console.log("애드버튼 누름",commaPlaylist); 
  router.push(`${currentFirstPath}/timesetting`);
  }}
 
  return (
    <style.Container isPlaylistAvailable={isPlaylistAvailable}>
      {!isPlaylistAvailable ? (
        <style.Box>
          <style.Text>
            마이 플레이리스트가 없어요, <br />
            지금 담으러 가시겠어요?
          </style.Text>
          <style.Arrow />
        </style.Box>
      ) : isCommaPlaylistAvailable ? (
        <style.ShowPlaylist>
          <style.MainIcon />
          <style.EditDiv>
            {!isEditMode ? (
              <style.Button onClick={onClickIsEditMode} isEditMode={isEditMode}>
                편집
              </style.Button>
            ) : (
              <style.Button onClick={onClickIsEditMode} isEditMode={isEditMode}>
                취소
              </style.Button>
            )}
          </style.EditDiv>
          {commaPlaylist &&
            commaPlaylist.map((playlist: PlaylistType, index: number) => (
              <PlaylistBox
                isEditMode={isEditMode}
                key={playlist.playlistId}
                playlist={playlist}
              />
            ))}
        </style.ShowPlaylist>
      ) : (
        <style.SuggestAddPlaylist>콤마 플레이리스트가 없어요.</style.SuggestAddPlaylist>
      )}
      {!isEditMode ? (
        <style.AddPlaylistButton onClick={onClickAddPlaylistButton} />
      ) : (
        <style.DeletePlaylistButton />
      )}
    </style.Container>
  );
  
};
