import TimePicker from '@/components/common/time-picker';
import { TimePickerProps } from '@/components/common/time-picker/TimePicker';
import * as style from './TimePickerForm.style';

export const TimePickerForm = ({
  meridiem,
  hour,
  min,
  onChangeMeridiem,
  onChangeHour,
  onChangeMin,
}: TimePickerProps) => (
  <style.Wrapper>
    <style.Box>
      <style.Title>주로 음악을 듣는 시간대는 언제인가요?</style.Title>
      <style.Desc>하루에 한 번 음악을 추천해 드릴게요.</style.Desc>
    </style.Box>
    <TimePicker
      meridiem={meridiem}
      onChangeMeridiem={onChangeMeridiem}
      hour={hour}
      onChangeHour={onChangeHour}
      min={min}
      onChangeMin={onChangeMin}
    />
  </style.Wrapper>
);
