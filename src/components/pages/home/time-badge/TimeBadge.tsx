import * as styles from './TimeBadge.style';

interface TimeBadgeProps {
  /**
   * 언제 플레이리스트가 실행되는지
   * format : hh:mm:ss, hh:mm 상관없습니다.
   */
  whenPlaylistWillPlay: string;
  isTimeBadgeVisible: boolean;
}

export const TimeBadge = ({
  whenPlaylistWillPlay,
  isTimeBadgeVisible,
}: TimeBadgeProps) => {
  function convertTimeToAMPM(time: string = '12:00') {
    if (!time.includes(':')) return '-- --:--';

    const splitArr = time.split(':');
    let hour = parseInt(splitArr[0], 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 ? hour % 12 : 12; // 0시일 때 12시로 변경
    const minute = splitArr[1];

    return `${ampm} ${hour}:${minute}`;
  }

  return (
    <styles.Badge isTimeBadgeVisible={isTimeBadgeVisible}>
      {convertTimeToAMPM(whenPlaylistWillPlay)}
    </styles.Badge>
  );
};
