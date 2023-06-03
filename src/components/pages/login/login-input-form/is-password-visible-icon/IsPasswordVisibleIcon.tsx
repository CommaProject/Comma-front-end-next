import * as style from './IsPasswordVisibleIcon.style';

interface IsPasswordVisibleIconProps {
  isPasswordVisible: boolean;
  onClicks: () => void;
}

export const IsPasswordVisibleIcon = ({
  isPasswordVisible,
  onClicks,
}: IsPasswordVisibleIconProps) =>
  isPasswordVisible ? (
    <style.NowPasswordVisibleIcon onClick={onClicks} />
  ) : (
    <style.NowPasswordInvisibleIcon onClick={onClicks} />
  );
