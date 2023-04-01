import { ChangeEvent } from 'react';
import * as style from './LoginInputForm.style';

interface LoginInputFormProps {
  input: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isPassword: boolean;
  isPasswordVisible: boolean;
}
export const LoginInputForm = ({
  input,
  onChange,
  isPassword,
  isPasswordVisible,
}: LoginInputFormProps) => {
  const isPasswordAndPasswordVisible = isPassword && !isPasswordVisible;
  return (
    <style.Input
      type={isPasswordAndPasswordVisible ? 'password' : 'text'}
      placeholder={isPassword ? '비밀번호' : '아이디'}
      value={input}
      onChange={onChange}
    />
  );
};
