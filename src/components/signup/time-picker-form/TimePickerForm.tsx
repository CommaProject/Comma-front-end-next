import { theme } from '~/src/styles';
import { ExplainTextBox, SubTextBox } from '../../text-box';
import TimePicker from '../../time-picker';
import { TextWrapper, TimePickerContainer } from './TimePickerForm.style';

interface TimePickerFormProps {
  meridiem: string;
  setMeridiem: (text: string) => void;
  hour: number;
  setHour: (num: number) => void;
  min: number;
  setMin: (num: number) => void;
}

export const TimePickerForm = ({
  meridiem,
  hour,
  min,
  setMeridiem,
  setHour,
  setMin,
}: TimePickerFormProps) => {
  return (
    <TimePickerContainer>
      <TextWrapper>
        <SubTextBox>{'주로 음악을 듣는 시간대는 언제인가요?'}</SubTextBox>
        <ExplainTextBox color={theme.colors.grayscale.gray300}>
          {'하루에 한 번 음악을 추천해 드릴게요.'}
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
};
