import React from 'react';
import { TrackType } from '@/types/trackTypes';
import * as style from './MusicAlbumFrom.style';
import { HorizontalAlbumWithIcon } from '../horizontal-album-with-icon';

type isLike = boolean;
interface EnhancedTrackType extends TrackType {
  isLike: boolean;
}
interface MusicAlbumFromProps {
  musicData: EnhancedTrackType[] | undefined;
  onClickPlusButton: () => void;
  onClickLikeButton: (trackId: string) => void;
  onClick: () => void;
}

export const MusicAlbumFrom = ({
  musicData,
  onClickPlusButton,
  onClickLikeButton,
  onClick,
}: MusicAlbumFromProps) => (
  <style.Wrapper>
    {musicData &&
      musicData.map((value) => (
        <style.AlbumBox>
          <HorizontalAlbumWithIcon
            key={value.albumId}
            isLike={value.isLike}
            timer={`${value.durationMinute}m ${value.durationSecond}s`}
            imgUrl={value.images ? value.images[0].url : 'error: undefine'}
            songName={value.trackName}
            singerName={value.artist}
            onClickPlusButton={onClickPlusButton}
            onClickLikeButton={() => onClickLikeButton(value.trackId)}
            onClick={onClick}
          />
        </style.AlbumBox>
      ))}
  </style.Wrapper>
);
