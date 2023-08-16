import { HorizontalAlbum } from '@/components/common/album/horizontal-album';
import { HorizontalAlbumProps } from '@/components/common/album/horizontal-album/HorizontalAlbum';
import React from 'react';
import * as style from './HorizontalAlbumWithIcon.style';

interface HorizontalAlbumWithIconProps extends HorizontalAlbumProps {
  // eslint-disable-next-line no-unused-vars
  onClickPlusButton: (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => void;
  onClickLikeButton: (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => void;
  isLike: boolean;
}

export const HorizontalAlbumWithIcon = ({
  imgUrl,
  songName,
  singerName,
  onClick,
  timer,
  onClickPlusButton,
  onClickLikeButton,
  isLike,
}: HorizontalAlbumWithIconProps) => (
  <style.Wrapper>
    <HorizontalAlbum
      imgUrl={imgUrl}
      singerName={singerName}
      songName={songName}
      onClick={onClick}
      timer={timer}
    />
    <style.ButtonContainer>
      <style.addPlayListButton onClick={onClickPlusButton} />
      <style.likeButton isLike={isLike} onClick={onClickLikeButton} />
    </style.ButtonContainer>
  </style.Wrapper>
);
