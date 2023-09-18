import React from 'react';
import { TrackType } from '@/types/trackTypes';
import * as style from './MusicAlbumFrom.style';
import { HorizontalAlbumWithIcon } from '../horizontal-album-with-icon';

type isLike = boolean;
interface EnhancedTrackProps extends TrackType {
  isLike: boolean;
}
interface MusicAlbumFromProps {
  musicData: EnhancedTrackProps[] | undefined;
  onClickPlusButton: () => void;
  onClickLikeButton: (trackId: string) => void;
  onClickAlbumBox: (previewUrl: string) => void;
}

export const MusicAlbumFrom = ({
  musicData,
  onClickPlusButton,
  onClickLikeButton,
  onClickAlbumBox,
}: MusicAlbumFromProps) => (
  <style.Wrapper>
    {musicData &&
      musicData.map((value) => (
        <style.AlbumBox
          onClick={() => {
            onClickAlbumBox(value.previewUrl);
          }}
        >
          <HorizontalAlbumWithIcon
            key={value.albumId}
            isLike={value.isLike}
            timer={`${value.durationMinute}m ${value.durationSecond}s`}
            imgUrl={value.images ? value.images[0].url : 'error: undefine'}
            songName={value.trackName}
            singerName={value.artist}
            onClickPlusButton={onClickPlusButton}
            onClickLikeButton={() => onClickLikeButton(value.trackId)}
            onClick={() => {}}
          />
        </style.AlbumBox>
      ))}
  </style.Wrapper>
);
