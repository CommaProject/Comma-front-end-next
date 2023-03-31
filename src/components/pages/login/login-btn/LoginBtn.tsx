import axios from 'axios';
import { useRouter } from 'next/router';
import * as style from './LoginBtn.style';

interface LoginBtnProps {
  inputId: string;
  inputPw: string;
}

export const LoginBtn = ({ inputId, inputPw }: LoginBtnProps) => {
  const router = useRouter();

  /**
   * 로그인 로직 API 구조만 짜놓았습니다.
   */
  const axiosLoginLogic = () => {
    // TODO : 백엔드 로그인 URI 기입 필요
    axios
      .post('/', {
        id: inputId,
        password: inputPw,
      })
      .then((res) => {
        // TODO : API SPEC 나온후 작성 필요
        router.push('/');
      });
  };

  return (
    <style.Wrapper>
      <style.Button
        onClick={() => {
          axiosLoginLogic();
        }}
      >
        로그인
      </style.Button>
    </style.Wrapper>
  );
};
