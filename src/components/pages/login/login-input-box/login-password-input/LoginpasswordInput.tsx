import { ChangeEvent } from 'react';
import * as style from './LoginpasswordInput.style';

interface LoginPasswordInputProps {
  inputPw: string;
  onChangeInputPw: (event: ChangeEvent<HTMLInputElement>) => void;
  isPasswordVisible: boolean;
}

export const LoginPasswordInput = ({
  inputPw,
  onChangeInputPw,
  isPasswordVisible,
}: LoginPasswordInputProps) => {
  return (
    <style.Input
      name="password"
      type={isPasswordVisible ? 'text' : 'password'}
      placeholder="비밀번호"
      value={inputPw}
      onChange={onChangeInputPw}
    />
  );
};
