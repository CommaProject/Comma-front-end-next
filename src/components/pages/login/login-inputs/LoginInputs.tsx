import { ChangeEvent } from 'react';
import LoginIdInput from './login-id-input';
import LoginPasswordInput from './login-password-input';
import * as style from './LoginInputs.style';

interface LoginInputsProps {
  inputId: string;
  onChangeInputId: (event: ChangeEvent<HTMLInputElement>) => void;
  inputPw: string;
  onChangeInputPw: (event: ChangeEvent<HTMLInputElement>) => void;
  isPasswordVisible: boolean;
  setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginInputs = ({
  inputId,
  onChangeInputId,
  inputPw,
  onChangeInputPw,
  isPasswordVisible,
  setIsPasswordVisible,
}: LoginInputsProps) => {
  const changeIsPasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <style.Wrapper>
      <LoginIdInput inputId={inputId} onChangeInputId={onChangeInputId} />
      <LoginPasswordInput
        isPasswordVisible={isPasswordVisible}
        inputPw={inputPw}
        onChangeInputPw={onChangeInputPw}
      />
      {isPasswordVisible ? (
        <style.NowPasswordVisibleIcon onClick={changeIsPasswordVisible} />
      ) : (
        <style.NowPasswordInvisibleIcon onClick={changeIsPasswordVisible} />
      )}
    </style.Wrapper>
  );
};
