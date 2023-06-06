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
