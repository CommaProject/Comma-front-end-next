/**
 * meridiem, hour, min을 "시:분:초" 형식으로 변환하기 위한 util 함수
 * @param time 오전 오후, 시간, 분을 나타내는 객체
 * @returns "시:분:초" 형식의 string
 */
export const formatTime = (time: {
  meridiem: string;
  hour: number;
  min: number;
}): string => {
  const { meridiem, hour, min } = time;
  let formattedHour = hour.toString().padStart(2, '0');
  const formattedMin = min.toString().padStart(2, '0');
  const formattedSec = '00';

  if (meridiem === 'AM' && hour === 12) {
    formattedHour = '00';
  } else if (meridiem === 'PM' && hour !== 12) {
    formattedHour = (hour + 12).toString().padStart(2, '0');
  }

  return `${formattedHour}:${formattedMin}:${formattedSec}`;
};
