import { ChangeEvent } from 'react';
import LoginIdInput from './login-id-input';
import LoginPasswordInput from './login-password-input';
import * as style from './LoginInputBox.style';

interface LoginInputsProps {
  inputId: string;
  onChangeInputId: (event: ChangeEvent<HTMLInputElement>) => void;
  inputPw: string;
  onChangeInputPw: (event: ChangeEvent<HTMLInputElement>) => void;
  isPasswordVisible: boolean;
  setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onChangeIsPasswordVisible: () => void;
  onClickLoginLogic: () => void;
}

export const LoginInputBox = ({
  inputId,
  onChangeInputId,
  inputPw,
  onChangeInputPw,
  isPasswordVisible,
  setIsPasswordVisible,
  onClickLoginLogic,
}: LoginInputsProps) => {
  return (
    <style.Wrapper>
      <LoginIdInput inputId={inputId} onChangeInputId={onChangeInputId} />
      <LoginPasswordInput
        isPasswordVisible={isPasswordVisible}
        inputPw={inputPw}
        onChangeInputPw={onChangeInputPw}
      />
      {isPasswordVisible ? (
        <style.NowPasswordVisibleIcon onClick={setIsPasswordVisible} />
      ) : (
        <style.NowPasswordInvisibleIcon onClick={setIsPasswordVisible} />
      )}
      <style.Button onClick={onClickLoginLogic}>로그인</style.Button>
    </style.Wrapper>
  );
};
