import HomeTemplate from '@/components/template/home';
import { useState } from 'react';
import { useGetMultiplePlaylists } from '~/src/apis/playlist';



const Home = () => {
  
  
  
  const [isEditMode,setIsEditMode] = useState<boolean>(false);
  const {multiplePlaylists, isPlaylistAvailable, isCommaPlaylistAvailable, commaPlaylist} = useGetMultiplePlaylists();
  const onClickIsEditMode = () => {
    setIsEditMode(!isEditMode);
    
  }
  // const HandleEditModeChange = () => {
  // 편집 -> 일반 모드로 변할때 isPlaylistSelected(State)를 
  // 모두 false로 변경해주는 함수
  // }

  return (
    <HomeTemplate
      
      isPlaylistAvailable={isPlaylistAvailable}
      isCommaPlaylistAvailable = {isCommaPlaylistAvailable}
      isEditMode= {isEditMode}
      setIsEditMode={setIsEditMode}
      onClickIsEditMode ={onClickIsEditMode}
      commaPlaylist={commaPlaylist}
      
     
    />
  );
};

export default Home;
