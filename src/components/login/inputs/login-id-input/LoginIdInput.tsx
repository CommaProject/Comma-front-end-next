import { useAtom } from 'jotai';
import { loginInputAtom } from '@/stores/atoms';
import { LoginIdInputStyle } from './LoginIdInput.style';

const LoginIdInput = () => {
  const [input, setInput] = useAtom(loginInputAtom);
  return (
    <LoginIdInputStyle
      type="text"
      placeholder="아이디"
      name="id"
      value={input.id}
      onChange={(event) => {
        setInput({ ...input, id: event.target.value });
      }}
    />
  );
};

export default LoginIdInput;
