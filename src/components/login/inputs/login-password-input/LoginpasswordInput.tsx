import { useAtom } from 'jotai';
import { loginInputAtom } from '@/stores/atoms';
import { LoginPasswordInputStyle } from './LoginpasswordInput.style';

interface LoginPasswordInputProps {
  showPassword: boolean;
}

export const LoginPasswordInput = ({
  showPassword,
}: LoginPasswordInputProps) => {
  const [input, setInput] = useAtom(loginInputAtom);
  return (
    <LoginPasswordInputStyle
      name="password"
      type={showPassword ? 'text' : 'password'}
      placeholder="비밀번호"
      value={input.password}
      onChange={(event) => {
        setInput({ ...input, password: event.target.value });
      }}
    />
  );
};
