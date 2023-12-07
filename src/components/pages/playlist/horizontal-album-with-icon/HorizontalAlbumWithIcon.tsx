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
  onToggleSelect: (playlistId: number) => void;
  playlistId: number;
}

export const HorizontalAlbumWithIcon = ({
  imgUrl,
  songName,
  singerName,
  onClick,
  timer,
  onClickMoveButton,
  isEditMode,
  onToggleSelect,
  playlistId,
}: HorizontalAlbumWithIconProps) => {
  const [isTrackSelected, setIsTrackSelected] = useState(false);
  const onClickSelectButton = () => {
    setIsTrackSelected(!isTrackSelected);
    onToggleSelect(playlistId);
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
      <style.AlbumBox isTrackSelected={isTrackSelected} isEditMode={isEditMode}>
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
      </style.AlbumBox>
    </style.Wrapper>
  );
};
