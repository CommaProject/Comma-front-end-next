import { MouseEvent } from 'react';
import * as style from './DayBtnList.style';

const DAYS = ['월', '화', '수', '목', '금', '토', '일'];

interface DayBtnListProps {
  onCheckIsActivate: (day: string) => boolean;
  onClickDays: (e: MouseEvent<HTMLButtonElement>) => void;
}
export const DayBtnList = ({
  onCheckIsActivate,
  onClickDays,
}: DayBtnListProps) => (
  <style.Wrapper>
    {DAYS.map((day) => (
      <style.Button
        name={day}
        key={day}
        onClick={onClickDays}
        isActivate={onCheckIsActivate(day)}
      >
        {day}
      </style.Button>
    ))}
  </style.Wrapper>
);
