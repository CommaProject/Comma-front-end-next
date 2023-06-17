import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import * as style from './TimePicker.style';

/**
 * Time Picker form을 관리하기 위한 인터페이스
 */
export interface TimePickerProps {
  /** AM/PM 출력을 위한 데이터 */
  meridiem: string;
  /** AM/PM에 대한 change event 함수 */
  onChangeMeridiem: (text: string) => void;
  /** 시간 출력을 위한 데이터 */
  hour: number;
  /** 시간에 대한 change event 함수 */
  onChangeHour: (swiper: SwiperCore) => void;
  /** 분 출력을 위한 데이터 */
  min: number;
  /** 분에 대한 change event 함수 */
  onChangeMin: (swiper: SwiperCore) => void;
}

SwiperCore.use([Navigation, Scrollbar]);

const HOUR_LIST = Array.from(
  Array(12)
    .fill(1)
    .map((i, v) => i + v),
);
const MIN_LIST = Array.from(Array(60).keys());

const MeridiemPicker = ({
  meridiem,
  onChangeMeridiem,
}: Pick<TimePickerProps, 'meridiem' | 'onChangeMeridiem'>) => (
  <style.Box>
    <style.Slide
      onClick={() => onChangeMeridiem('AM')}
      isActivate={meridiem === 'AM'}
      key="am"
    >
      AM
    </style.Slide>
    <style.Slide isActivate={false} key="-">
      ---
    </style.Slide>
    <style.Slide
      onClick={() => onChangeMeridiem('PM')}
      isActivate={meridiem === 'PM'}
      key="AM"
    >
      PM
    </style.Slide>
  </style.Box>
);

const HourPicker = ({
  hour,
  onChangeHour,
}: Pick<TimePickerProps, 'hour' | 'onChangeHour'>) => (
  <style.Box>
    <style.CustomSwiper
      direction="vertical"
      slidesPerView={3}
      mousewheel
      slideToClickedSlide
      centeredSlides
      loop
      onSlideChange={onChangeHour}
    >
      {HOUR_LIST.map((data) => (
        <style.CustomSwiperSlide key={data}>
          <style.Slide isActivate={hour === data}>{data}</style.Slide>
        </style.CustomSwiperSlide>
      ))}
    </style.CustomSwiper>
  </style.Box>
);

const MinPicker = ({
  min,
  onChangeMin,
}: Pick<TimePickerProps, 'min' | 'onChangeMin'>) => (
  <style.Box>
    <style.CustomSwiper
      direction="vertical"
      slidesPerView={3}
      autoHeight
      mousewheel
      slideToClickedSlide
      centeredSlides
      loop
      onSlideChange={onChangeMin}
    >
      {MIN_LIST.map((data) => (
        <style.CustomSwiperSlide key={data}>
          <style.Slide isActivate={data === min}>{data}</style.Slide>
        </style.CustomSwiperSlide>
      ))}
    </style.CustomSwiper>
  </style.Box>
);

export const TimePicker = ({
  meridiem,
  hour,
  min,
  onChangeMeridiem,
  onChangeHour,
  onChangeMin,
}: TimePickerProps) => (
  <style.Wrapper>
    <MeridiemPicker meridiem={meridiem} onChangeMeridiem={onChangeMeridiem} />
    <style.Text>:</style.Text>
    <HourPicker hour={hour} onChangeHour={onChangeHour} />
    <style.Text>:</style.Text>
    <MinPicker min={min} onChangeMin={onChangeMin} />
  </style.Wrapper>
);
