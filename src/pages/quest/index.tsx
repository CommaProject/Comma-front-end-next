import { useRouter } from 'next/router';
import React, { ChangeEvent } from 'react';
import { QuestTemplate } from '~/src/components/template/quest/QuestTemplate';

export async function getStaticProps() {
  return {
    props: {
      isNavigationVisible: false,
    },
  };
}

const Quest = () => {
  const router = useRouter();

  const handleRoundInput = () => {
    router.push('/quest/search');
  };

  return <QuestTemplate onClickRoundInput={handleRoundInput} />;
};

export default Quest;
