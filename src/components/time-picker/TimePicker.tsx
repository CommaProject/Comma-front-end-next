import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import {
  Container,
  StyledSwiper,
  StyledSwiperSlides,
  SwiperBlock,
  SwiperContainer,
} from './TimePicker.style';
import SwiperCore, { Navigation, Scrollbar } from 'swiper';

SwiperCore.use([Navigation, Scrollbar]);

const HOUR_LIST = Array.from(
  Array(12)
    .fill(1)
    .map((i, v) => i + v),
);
const MIN_LIST = Array.from(Array(60).keys());

const MeridiemPicker = ({
  meridiem,
  setMeridiem,
}: {
  meridiem: string;
  setMeridiem: (text: string) => void;
}) => {
  return (
    <Container>
      <StyledSwiperSlides
        onClick={() => setMeridiem('AM')}
        disable={meridiem === 'AM'}
        key={'am'}
      >
        AM
      </StyledSwiperSlides>
      <StyledSwiperSlides disable={false} key={'-'}>
        ---
      </StyledSwiperSlides>
      <StyledSwiperSlides
        onClick={() => setMeridiem('PM')}
        disable={meridiem === 'PM'}
        key={'pm'}
      >
        PM
      </StyledSwiperSlides>
    </Container>
  );
};

const HourPicker = ({
  hour,
  setHour,
}: {
  hour: number;
  setHour: (num: number) => void;
}) => {
  return (
    <Container>
      <StyledSwiper
        direction={'vertical'}
        slidesPerView={3}
        mousewheel
        slideToClickedSlide
        centeredSlides
        loop={true}
        onSlideChange={(swiper) => {
          setHour(swiper.realIndex + 1);
        }}
      >
        {HOUR_LIST.map((data) => (
          <SwiperSlide key={data}>
            <StyledSwiperSlides disable={hour === data}>
              {data}
            </StyledSwiperSlides>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Container>
  );
};

const MinPicker = ({
  min,
  setMin,
}: {
  min: number;
  setMin: (num: number) => void;
}) => {
  return (
    <Container>
      <StyledSwiper
        direction={'vertical'}
        slidesPerView={3}
        autoHeight={true}
        mousewheel
        slideToClickedSlide
        centeredSlides
        loop={true}
        onSlideChange={(swiper) => {
          setMin(swiper.realIndex);
        }}
      >
        {MIN_LIST.map((data) => (
          <SwiperSlide key={data}>
            <StyledSwiperSlides disable={data === min}>
              {data}
            </StyledSwiperSlides>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Container>
  );
};

interface TimePickerProps {
  meridiem: string;
  setMeridiem: (text: string) => void;
  hour: number;
  setHour: (num: number) => void;
  min: number;
  setMin: (num: number) => void;
}
export const TimePicker = ({
  meridiem,
  hour,
  min,
  setMeridiem,
  setHour,
  setMin,
}: TimePickerProps) => {
  return (
    <SwiperContainer>
      <MeridiemPicker meridiem={meridiem} setMeridiem={setMeridiem} />
      <SwiperBlock>:</SwiperBlock>
      <HourPicker hour={hour} setHour={setHour} />
      <SwiperBlock>:</SwiperBlock>
      <MinPicker min={min} setMin={setMin} />
    </SwiperContainer>
  );
};
