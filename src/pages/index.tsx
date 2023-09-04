import router from 'next/router';
import { useEffect } from 'react';
import { userInfomationAsync } from '@/apis/auth';
import { RandomAlbumLocation } from '../components/common/random-album-location';
import { usePlayer } from '../hooks/usePlayer';
import { MusicComment } from '../components/common/player';

const Home = (isUserVaild: boolean) => {
  useEffect(() => {
    if (isUserVaild === false) {
      router.replace('/login');
    }
  }, []);

  // const { modalState, setModalState } = usePlayer();

  return (
    <main>
      <div>
        <MusicComment />
      </div>
    </main>
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
