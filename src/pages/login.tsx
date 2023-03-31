import { ChangeEvent, useState } from 'react';
import LoginTemplate from '@/components/template/login';

const Login = () => {
  const [enteredInputId, setEnteredInputId] = useState('');
  const [enteredInputPw, setEnteredInputPw] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onChangeInputId = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setEnteredInputId(event.target.value);
  const onChangeInputPw = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setEnteredInputPw(event.target.value);

  return (
    <LoginTemplate
      inputId={enteredInputId}
      setIsPasswordVisible={setIsPasswordVisible}
      onChangeInputId={onChangeInputId}
      inputPw={enteredInputPw}
      onChangeInputPw={onChangeInputPw}
      isPasswordVisible={isPasswordVisible}
    />
  );
};

export default Login;
