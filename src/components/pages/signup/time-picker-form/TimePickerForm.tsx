import { theme } from '@/styles/theme';
import {
  ExplainTextBox,
  SubTextBox,
} from '~/src/components/pages/signup/text-box';
import TimePicker from '~/src/components/common/time-picker';
import { TimePickerProps } from '@/components/common/time-picker/TimePicker';
import { TextWrapper, TimePickerContainer } from './TimePickerForm.style';

export const TimePickerForm = ({
  meridiem,
  hour,
  min,
  setMeridiem,
  setHour,
  setMin,
}: TimePickerProps) => (
  <TimePickerContainer>
    <TextWrapper>
      <SubTextBox>주로 음악을 듣는 시간대는 언제인가요?</SubTextBox>
      <ExplainTextBox color={theme.colors.grayscale.gray300}>
        하루에 한 번 음악을 추천해 드릴게요.
      </ExplainTextBox>
    </TextWrapper>
    <TimePicker
      meridiem={meridiem}
      setMeridiem={setMeridiem}
      hour={hour}
      setHour={setHour}
      min={min}
      setMin={setMin}
    />
  </TimePickerContainer>
);
