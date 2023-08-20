import React from 'react';
import { getTrackAsync, getTrackProps } from '@/apis/search';
import * as style from './MusicAlbumFrom.style';
import { HorizontalAlbumWithIcon } from '../horizontal-album-with-icon';

interface MusicAlbumFromProps {
  musicData: getTrackProps[] | undefined;
  onClickPlusButton: () => void;
  onClickLikeButton: () => void;
  onClick: () => void;
}

export const MusicAlbumFrom = ({
  musicData,
  onClickPlusButton,
  onClickLikeButton,
  onClick,
}: MusicAlbumFromProps) => {
  console.log('musicData', musicData);

  return (
    <style.Wrapper>
      {musicData &&
        musicData.map((value) => (
          <style.AlbumBox>
            <HorizontalAlbumWithIcon
              key={value.albumId}
              isLike={false}
              timer={`${value.durationMinute}m ${value.durationSecond}s`}
              imgUrl={value.images ? value.images[0].url : 'error: undefine'}
              songName={value.trackName}
              singerName={value.artist}
              onClickPlusButton={onClickPlusButton}
              onClickLikeButton={onClickLikeButton}
              onClick={onClick}
            />
          </style.AlbumBox>
        ))}
    </style.Wrapper>
  );
};
