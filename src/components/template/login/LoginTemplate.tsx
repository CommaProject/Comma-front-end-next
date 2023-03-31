import * as style from './LoginTemplate.style';
import { ChangeEvent } from 'react';
import MainLogo from '@/components/pages/login/main-logo';
import LoginInputs from '@/components/pages/login/login-inputs';
import LoginBtn from '@/components/pages/login/login-btn';
import FindIdPwLink from '@/components/pages/login/find-id-pw-link';
import RegisterLink from '@/components/pages/login/register-link';
import SnsLoginBox from '@/components/pages/login/sns-login-box';

interface LoginTemplateProps {
  inputId: string;
  onChangeInputId: (event: ChangeEvent<HTMLInputElement>) => void;
  inputPw: string;
  onChangeInputPw: (event: ChangeEvent<HTMLInputElement>) => void;
  isPasswordVisible: boolean;
  setIsPasswordVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginTemplate = ({
  inputId,
  onChangeInputId,
  inputPw,
  onChangeInputPw,
  isPasswordVisible,
  setIsPasswordVisible,
}: LoginTemplateProps) => {
  return (
    <style.Wrapper>
      <MainLogo />
      <LoginInputs
        inputId={inputId}
        onChangeInputId={onChangeInputId}
        inputPw={inputPw}
        onChangeInputPw={onChangeInputPw}
        isPasswordVisible={isPasswordVisible}
        setIsPasswordVisible={setIsPasswordVisible}
      />
      <LoginBtn inputId={inputId} inputPw={inputPw} />
      <FindIdPwLink />
      <RegisterLink />
      <SnsLoginBox />
    </style.Wrapper>
  );
};
