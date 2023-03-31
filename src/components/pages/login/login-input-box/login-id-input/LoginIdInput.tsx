import { ChangeEvent } from 'react';
import * as style from './LoginIdInput.style';

interface LoginIdInputProps {
  inputId: string;
  onChangeInputId: (event: ChangeEvent<HTMLInputElement>) => void;
}

const LoginIdInput = ({ inputId, onChangeInputId }: LoginIdInputProps) => (
  <style.Input
    type="text"
    placeholder="아이디"
    name="id"
    value={inputId}
    onChange={onChangeInputId}
  />
);

export default LoginIdInput;
