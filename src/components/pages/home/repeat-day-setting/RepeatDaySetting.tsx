import { useCallback, useState } from 'react';
import * as style from './RepeatDaySetting.style';



export const RepeatDaySetting = useCallback(() => {
    const daysOfWeek: string[] = ['월', '화', '수', '목', '금', '토', '일'];
    const [selectedDays, setSelectedDays] = useState<string[]>([]);
    const onClickDay = (day:string) => {
        console.log(day);
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== day));
          } else {
            setSelectedDays([...selectedDays, day]);
          }
        
    }
    return(
        <style.Wrapper>
            <style.Text>Repeat</style.Text>
            <style.Box>
            {daysOfWeek.map((day,index) => (
            <style.DayDiv key = {index} onClick = {() => {onClickDay(day)}}>{day}</style.DayDiv>
            ))}
            </style.Box>
        </style.Wrapper>
    )
},[])