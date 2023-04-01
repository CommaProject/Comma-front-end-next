import { ChangeEvent, useState } from 'react';
import LoginTemplate from '@/components/template/login';
import { useRouter } from 'next/router';
import axios from 'axios';

export async function getStaticProps() {
  return {
    props: {
      isNavigationVisible: false,
    },
  };
}

const Login = () => {
  const router = useRouter();

  const [enteredInputId, setEnteredInputId] = useState('');
  const [enteredInputPw, setEnteredInputPw] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onChangeInputId = (event: ChangeEvent<HTMLInputElement>): void =>
    setEnteredInputId(event.target.value);
  const onChangeInputPw = (event: ChangeEvent<HTMLInputElement>): void =>
    setEnteredInputPw(event.target.value);
  const onClickIsPasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  /** 로그인 로직 API 구조만 짜놓았습니다. */
  const onClickLoginLogic = () => {
    // TODO : 백엔드 로그인 URI 기입 필요
    axios
      .post('/', {
        id: enteredInputId,
        password: enteredInputPw,
      })
      .then((res) => {
        // TODO : API SPEC 나온후 수정 필요
        router.push('/');
      });
  };

  return (
    <LoginTemplate
      inputId={enteredInputId}
      setIsPasswordVisible={setIsPasswordVisible}
      onChangeInputId={onChangeInputId}
      inputPw={enteredInputPw}
      onChangeInputPw={onChangeInputPw}
      isPasswordVisible={isPasswordVisible}
      onClickIsPasswordVisible={onClickIsPasswordVisible}
      onClickLoginLogic={onClickLoginLogic}
    />
  );
};

export default Login;
