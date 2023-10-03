import React from 'react';
import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import { SliderFreeMode } from '~/src/components/common/slider-free-mode';
import { PlaylistType } from '@/types/playlistTypes';
import { PlaylistAlbumForModal } from '~/src/components/common/playlist-rep-album-with-num';

export const Wrapper = styled.div`
  height: 100%;
  width: 390px;
  height: 245px;
  border-radius: 20px 20px 0px 0px;
  background: #fff;
  box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.18);
  position: absolute;
  bottom: 0;
`;
export const CustomSwiper = styled(Swiper)`
  height: auto;
`;

export const Slide = styled(SwiperSlide)`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface PlusModalProps {
  myPlayList: PlaylistType[];
}

export const PlusModal = ({ myPlayList }: PlusModalProps) => (
  <Wrapper>
    <SliderFreeMode componentGab={0}>
      {myPlayList &&
        myPlayList.map((playlist: PlaylistType) => (
          <PlaylistAlbumForModal
            playlistId={playlist.playlistId}
            repAlbumImageUrl={playlist.repAlbumImageUrl}
            trackCount={playlist.trackCount}
            onClickPlaylist={() => {}}
          />
        ))}
      <div>test</div>
    </SliderFreeMode>
  </Wrapper>
);
