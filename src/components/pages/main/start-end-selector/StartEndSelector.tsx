import * as style from './StartEndSelector.style';

interface StartEndSelectorProps {
  isStartTime: boolean;
  startHour: number;
  startMin: number;
  doneHour: number;
  doneMin: number;
  onChangeIsStart: (isStart: boolean) => void;
}
export const StartEndSelector = ({
  isStartTime,
  startHour,
  startMin,
  doneHour,
  doneMin,
  onChangeIsStart,
}: StartEndSelectorProps) => (
  <style.Wrapper>
    <style.Box
      isActivate={isStartTime}
      onClick={() => {
        onChangeIsStart(true);
      }}
    >
      <style.Head>Start</style.Head>
      <style.Time>{`${startHour}:${startMin}`}</style.Time>
    </style.Box>
    <style.Box
      isActivate={!isStartTime}
      onClick={() => {
        onChangeIsStart(false);
      }}
    >
      <style.Head>Done</style.Head>
      <style.Time>{`${doneHour}:${doneMin}`}</style.Time>
    </style.Box>
  </style.Wrapper>
);
