import HomeTemplate from '@/components/template/home';
import { useState } from 'react';

const Home = () => {
  
    //테스트 용 데이터
    whenPlaylistWillPlay : '20:50:12'
   playlistImageSources :
    [
      'http://news.samsungdisplay.com/wp-content/uploads/2018/08/8.jpg',
     'https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg',
    ]
   
  
  const [isPlaylistSelected] = useState(false);
  const [whenPlaylistWillPlay] = useState('12:00:00');
  const [isTimeBadgeVisible] = useState(true);
  const [isEditSelected] = useState(true);
  const [playlistImageSources] = useState([]);
  const [isAlarmSelected] = useState(true);
  const [isPlaylistAvailable] = useState(false);
  const [isEditMode,setIsEditMode] = useState(false);

  const onClickIsEditMode = () => {
    setIsEditMode(!isEditMode);
  }

  return (
    <HomeTemplate
      isPlaylistSelected={isPlaylistSelected}
      whenPlaylistWillPlay={whenPlaylistWillPlay}
      isTimeBadgeVisible={isTimeBadgeVisible}
      isEditSelected={isEditSelected}
      playlistImageSources={playlistImageSources}
      isAlarmSelected={isAlarmSelected}
      isPlaylistAvailable = {isPlaylistAvailable}
      isEditMode= {isEditMode}
      onClickIsEditMode ={onClickIsEditMode}
    />
  );
};

export default Home;
