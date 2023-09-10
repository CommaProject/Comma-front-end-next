import React, { useEffect } from 'react';
import useModal from '../hooks/useModal';
import { PlayerTemplate } from '../components/template/player';

const PlayerSample = () => {
  const { openPlayerModal } = useModal();

  useEffect(() => {
    openPlayerModal(
      <PlayerTemplate onClickMinimize={() => {}} title="333" date="333" />,
    );
  }, []);

  return <div>PlayerTest</div>;
};

export default PlayerSample;
