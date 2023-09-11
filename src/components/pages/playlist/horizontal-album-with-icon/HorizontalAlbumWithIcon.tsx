import { HorizontalAlbum } from '@/components/common/album/horizontal-album';
import { HorizontalAlbumProps } from '@/components/common/album/horizontal-album/HorizontalAlbum';
import React, { useState } from 'react';
import * as style from './HorizontalAlbumWithIcon.style';

interface HorizontalAlbumWithIconProps extends HorizontalAlbumProps {
  // eslint-disable-next-line no-unused-vars
  onClickMoveButton: (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => void;
  isEditMode: boolean;
}

export const HorizontalAlbumWithIcon = ({
  imgUrl,
  songName,
  singerName,
  onClick,
  timer,
  onClickMoveButton,
  isEditMode,
}: HorizontalAlbumWithIconProps) => {
  const [isAlarmSelected, setIsAlarmSelected] = useState(true);
  const [isTrackSelected, setIsTrackSelected] = useState(false);
  const onClickSelectButton = () => {
    setIsTrackSelected(!isTrackSelected);
    console.log(isTrackSelected);
  };
  return (
    <style.Wrapper isTrackSelected={isTrackSelected} isEditMode={isEditMode}>
      {isEditMode ? (
        <style.SelectButton
          isTrackSelected={isTrackSelected}
          onClick={onClickSelectButton}
        />
      ) : (
        ''
      )}
      <HorizontalAlbum
        imgUrl={imgUrl}
        singerName={singerName}
        songName={songName}
        onClick={onClick}
        timer={timer}
      />
      <style.ButtonContainer>
        {isEditMode && isTrackSelected ? <style.MoveButton /> : ''}
      </style.ButtonContainer>
    </style.Wrapper>
  );
};
