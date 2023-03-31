import * as style from './LoginIdInput.style';

interface LoginIdInputProps {
  inputId: string;
  onChangeInputId: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
