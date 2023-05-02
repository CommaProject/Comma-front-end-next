import SwiperCore from 'swiper';
import { MouseEvent } from 'react';
import { ConfigStateType } from '@/pages/config';
import TimePicker from '@/components/common/time-picker';
import StartEndSelector from '@/components/pages/main/start-end-selector';
import DayBtnList from '@/components/pages/main/day-btn-list';
import PlaylistList from '@/components/pages/main/playlist-list';
import Header from '@/components/pages/main/header';
import * as style from './ConfigTemplate.style';

interface ConfigTemplateProps {
  configState: ConfigStateType;
  isStartTime: boolean;
  onChangeIsStart: (isStart: boolean) => void;
  onChangeStartMeridiem: (meridiem: string) => void;
  onChangeStartHour: (swiper: SwiperCore) => void;
  onChangeStartMin: (swiper: SwiperCore) => void;
  onChangeDoneMeridiem: (meridiem: string) => void;
  onChangeDoneHour: (swiper: SwiperCore) => void;
  onChangeDoneMin: (swiper: SwiperCore) => void;
  onClickDays: (e: MouseEvent<HTMLButtonElement>) => void;
  onCheckIsActivate: (day: string) => boolean;
}
export const ConfigTemplate = ({
  configState,
  isStartTime,
  onChangeIsStart,
  onChangeStartMeridiem,
  onChangeStartHour,
  onChangeStartMin,
  onChangeDoneMeridiem,
  onChangeDoneHour,
  onChangeDoneMin,
  onClickDays,
  onCheckIsActivate,
}: ConfigTemplateProps) => (
  <style.Wrapper>
    <Header onClickNext={() => {}} onClickPrev={() => {}} />
    <style.Box>
      <StartEndSelector
        isStartTime={isStartTime}
        startHour={
          configState.startTime.hour +
          (configState.startTime.meridiem === 'PM' ? 12 : 0)
        }
        startMin={configState.startTime.min}
        doneHour={
          configState.doneTime.hour +
          (configState.doneTime.meridiem === 'PM' ? 12 : 0)
        }
        doneMin={configState.doneTime.min}
        onChangeIsStart={onChangeIsStart}
      />
      <style.TimePickerBox>
        {isStartTime ? (
          <TimePicker
            key="start"
            meridiem={configState.startTime.meridiem}
            hour={configState.startTime.hour}
            min={configState.startTime.min}
            onChangeMeridiem={onChangeStartMeridiem}
            onChangeHour={onChangeStartHour}
            onChangeMin={onChangeStartMin}
          />
        ) : (
          <TimePicker
            key="done"
            meridiem={configState.doneTime.meridiem}
            hour={configState.doneTime.hour}
            min={configState.doneTime.min}
            onChangeMeridiem={onChangeDoneMeridiem}
            onChangeHour={onChangeDoneHour}
            onChangeMin={onChangeDoneMin}
          />
        )}
      </style.TimePickerBox>
      <style.Text>Repeat</style.Text>
      <DayBtnList
        onCheckIsActivate={onCheckIsActivate}
        onClickDays={onClickDays}
      />
      <style.Text>My Playlist</style.Text>
      <PlaylistList />
    </style.Box>
  </style.Wrapper>
);
