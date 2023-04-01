import * as style from './IsPasswordVisibleIcon.style';

interface IsPasswordVisibleIconProps {
  isPasswordVisible: boolean;
  onClicks: () => void;
}

export const IsPasswordVisibleIcon = ({
  isPasswordVisible,
  onClicks,
}: IsPasswordVisibleIconProps) => {
  return isPasswordVisible ? (
    <style.NowPasswordVisibleIcon onClick={onClicks} />
  ) : (
    <style.NowPasswordInvisibleIcon onClick={onClicks} />
  );
};
