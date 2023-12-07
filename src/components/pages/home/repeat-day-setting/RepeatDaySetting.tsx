import { useCallback, useState } from 'react';
import * as style from './RepeatDaySetting.style';

export const RepeatDaySetting = () => {
  const daysOfWeek: string[] = ['월', '화', '수', '목', '금', '토', '일'];
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const onClickDay = useCallback(
    (day: string) => {
      if (selectedDays.includes(day)) {
        setSelectedDays(
          selectedDays.filter((selectedDay) => selectedDay !== day),
        );
      } else {
        setSelectedDays([...selectedDays, day]);
      }
    },
    [selectedDays],
  );

  return (
    <style.Wrapper>
      <style.Text>Repeat</style.Text>
      <style.Box>
        {daysOfWeek.map((day) => (
          <style.DayDiv
            isClicked={selectedDays.includes(day)}
            key={day}
            onClick={() => {
              onClickDay(day);
            }}
          >
            {day}
          </style.DayDiv>
        ))}
      </style.Box>
    </style.Wrapper>
  );
};
