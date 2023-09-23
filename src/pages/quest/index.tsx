import { useRouter } from 'next/router';
import React, { ChangeEvent } from 'react';
import { QuestTemplate } from '~/src/components/template/quest/QuestTemplate';

const Quest = () => {
  const router = useRouter();

  const handleRoundInput = () => {
    router.push('/quest/search');
  };

  return (
    <QuestTemplate
      onClickRoundInput={handleRoundInput}
      myMostListenedSongNode={undefined}
      myLikedSongsNode={undefined}
      highlyRecommendedSongNode={undefined}
    />
  );
};

export default Quest;
