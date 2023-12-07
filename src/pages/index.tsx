import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import { userInformationAsync } from '@/apis/auth';
import { useGetCommaPlaylists } from '@/apis/playlist';
import HomeTemplate from '@/components/template/home';
import { usePlaylist } from '../hooks/usePlaylist';

const Home = (isUserVaild: boolean) => {
  const router = useRouter();

  useEffect(() => {
    if (isUserVaild === false) {
      router.replace('/login');
    }
  }, []);
  const [selectedPlaylist, setSelectedPlaylist] = useState<number[]>([]);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const { isPlaylistAvailable, isCommaPlaylistAvailable, commaPlaylist } =
    useGetCommaPlaylists();
  const { mutateDeletePlaylist, mutateAlarmFlag } = usePlaylist();

  const onClickIsEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const onClickAddPlaylistButton = () => {
    if (isPlaylistAvailable) {
      router.push(`home/timesetting`);
    }
  };

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
    if (selectedPlaylist.length > 0) {
      // 삭제가 성공하면 다시 플레이리스트를 조회하여 업데이트
      // useGetMyPlaylists 훅을 통해 이미 업데이트되어 있음
      mutateDeletePlaylist(selectedPlaylist);
    }
  };

  const handleClickAlarmIcon = (playlistId: number) => {
    mutateAlarmFlag(playlistId);
  };

  return (
    <HomeTemplate
      onClickAddPlaylistButton={onClickAddPlaylistButton}
      onToggleSelect={onToggleSelect}
      isPlaylistAvailable={isPlaylistAvailable}
      isCommaPlaylistAvailable={isCommaPlaylistAvailable}
      isEditMode={isEditMode}
      onClickIsEditMode={onClickIsEditMode}
      onClickDeleteButton={onClickDeleteButton}
      onClickAlarmIcon={handleClickAlarmIcon}
      commaPlaylist={commaPlaylist || []}
    />
  );
};

export default Home;
export async function getServerSideProps() {
  const result = await userInformationAsync();
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
