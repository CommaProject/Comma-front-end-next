import { MouseEvent, useState } from 'react';
import SwiperCore from 'swiper';
import ConfigTemplate from '@/components/template/config';
import { TimeType } from '@/constants/types/signUpTypes';

export interface ConfigStateType {
  startTime: TimeType;
  doneTime: TimeType;
  repeatDays: string[];
}
const Config = () => {
  const [configState, setConfigState] = useState<ConfigStateType>({
    startTime: { meridiem: 'AM', hour: 5, min: 5 },
    doneTime: { meridiem: 'AM', hour: 5, min: 1 },
    repeatDays: [],
  });
  const [isStartTime, setIsStartTime] = useState(true);

  const handleIsActivate = (day: string) =>
    configState.repeatDays.includes(day);
  const handleIsStart = (isStart: boolean) => {
    setIsStartTime(isStart);
  };

  const handleDays = (e: MouseEvent<HTMLButtonElement>) => {
    const selected = e.currentTarget.name;
    setConfigState({
      ...configState,
      repeatDays: handleIsActivate(selected)
        ? configState.repeatDays.filter((day) => day !== selected)
        : [...configState.repeatDays, selected],
    });
  };

  // !이 아래 함수들을 반으로 줄이는게 나을까요 아님 그대로 두는게 나을까요!
  const handleStartMeridiem = (meridiem: string) => {
    setConfigState({
      ...configState,
      startTime: {
        ...configState.startTime,
        meridiem,
      },
    });
  };
  const handleStartHour = (swiper: SwiperCore) => {
    setConfigState({
      ...configState,
      startTime: {
        ...configState.startTime,
        hour: swiper.realIndex + 1,
      },
    });
  };
  const handleStartMin = (swiper: SwiperCore) => {
    setConfigState({
      ...configState,
      startTime: {
        ...configState.startTime,
        min: swiper.realIndex,
      },
    });
  };
  const handleDoneMeridiem = (meridiem: string) => {
    setConfigState({
      ...configState,
      doneTime: {
        ...configState.doneTime,
        meridiem,
      },
    });
  };
  const handleDoneHour = (swiper: SwiperCore) => {
    setConfigState({
      ...configState,
      doneTime: {
        ...configState.doneTime,
        hour: swiper.realIndex + 1,
      },
    });
  };
  const handleDoneMin = (swiper: SwiperCore) => {
    setConfigState({
      ...configState,
      doneTime: {
        ...configState.doneTime,
        min: swiper.realIndex,
      },
    });
  };

  return (
    <ConfigTemplate
      isStartTime={isStartTime}
      configState={configState}
      onChangeIsStart={handleIsStart}
      onChangeStartMeridiem={handleStartMeridiem}
      onChangeStartHour={handleStartHour}
      onChangeStartMin={handleStartMin}
      onChangeDoneMeridiem={handleDoneMeridiem}
      onChangeDoneHour={handleDoneHour}
      onChangeDoneMin={handleDoneMin}
      onClickDays={handleDays}
      onCheckIsActivate={handleIsActivate}
    />
  );
};

export default Config;
