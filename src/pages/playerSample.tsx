import React, { useEffect } from 'react';
import useModal from '@/hooks/useModal';
import { PlayerTemplate } from '@/components/template/player';

const PlayerSample = () => {
  const { openPlayerModal, closePlayerModal } = useModal();

  useEffect(() => {
    openPlayerModal(
      <PlayerTemplate
        onClickMinimize={() => {
          closePlayerModal();
        }}
        title="새소녀"
        date="2023-03-20 13:22:00"
      />,
    );
  }, []);

  return <div>PlayerTest</div>;
};

export default PlayerSample;
