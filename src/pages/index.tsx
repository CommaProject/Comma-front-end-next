import router from 'next/router';
import { useEffect,useState } from 'react';
import { userInfomationAsync } from '@/apis/auth';
import { useGetCommaPlaylists } from '@/apis/playlist';
import HomeTemplate from '@/components/template/home';

const Home = (isUserVaild: boolean) => {
  useEffect(() => {
    if (isUserVaild === false) {
      router.replace('/login');
    }
  }, []);

  // const { modalState, setModalState } = usePlayer();
  const [isEditMode,setIsEditMode] = useState<boolean>(false);
  const { isPlaylistAvailable, isCommaPlaylistAvailable, commaPlaylist} = useGetCommaPlaylists();
  const onClickIsEditMode = () => {
    setIsEditMode(!isEditMode);
    
  }
  return (
    <HomeTemplate
      
    isPlaylistAvailable={isPlaylistAvailable}
    isCommaPlaylistAvailable = {isCommaPlaylistAvailable}
    isEditMode= {isEditMode}
    onClickIsEditMode ={onClickIsEditMode}
    commaPlaylist={commaPlaylist}
    
   
  />
  );
};

export default Home;
export async function getServerSideProps() {
  const result = await userInfomationAsync();
  let isUserVaildResult = false;

  if (!result.isSuccess && result.result.code === -4) {
    isUserVaildResult = false;
  } else {
    isUserVaildResult = true;
  }

  return {
    props: {
      isUserVaild: isUserVaildResult,
    },
  };
}
