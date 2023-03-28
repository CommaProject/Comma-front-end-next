import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import {
  Container,
  StyledSwiper,
  StyledSwiperSlides,
  SwiperBlock,
  SwiperContainer,
} from './TimePicker.style';

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
}) => (
  <Container>
    <StyledSwiperSlides
      onClick={() => setMeridiem('AM')}
      disable={meridiem === 'AM'}
      key="am"
    >
      AM
    </StyledSwiperSlides>
    <StyledSwiperSlides disable={false} key="-">
      ---
    </StyledSwiperSlides>
    <StyledSwiperSlides
      onClick={() => setMeridiem('PM')}
      disable={meridiem === 'PM'}
      key="pm"
    >
      PM
    </StyledSwiperSlides>
  </Container>
);

const HourPicker = ({
  hour,
  setHour,
}: {
  hour: number;
  setHour: (num: number) => void;
}) => (
  <Container>
    <StyledSwiper
      direction="vertical"
      slidesPerView={3}
      mousewheel
      slideToClickedSlide
      centeredSlides
      loop
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

const MinPicker = ({
  min,
  setMin,
}: {
  min: number;
  setMin: (num: number) => void;
}) => (
  <Container>
    <StyledSwiper
      direction="vertical"
      slidesPerView={3}
      autoHeight
      mousewheel
      slideToClickedSlide
      centeredSlides
      loop
      onSlideChange={(swiper) => {
        setMin(swiper.realIndex);
      }}
    >
      {MIN_LIST.map((data) => (
        <SwiperSlide key={data}>
          <StyledSwiperSlides disable={data === min}>{data}</StyledSwiperSlides>
        </SwiperSlide>
      ))}
    </StyledSwiper>
  </Container>
);

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
}: TimePickerProps) => (
  <SwiperContainer>
    <MeridiemPicker meridiem={meridiem} setMeridiem={setMeridiem} />
    <SwiperBlock>:</SwiperBlock>
    <HourPicker hour={hour} setHour={setHour} />
    <SwiperBlock>:</SwiperBlock>
    <MinPicker min={min} setMin={setMin} />
  </SwiperContainer>
);
