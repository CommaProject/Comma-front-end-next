import React, { ChangeEvent } from 'react';
// import FindLinkBox from '@/components/pages/login/find-link-box';
import SnsLoginBox from '@/components/pages/login/sns-login-box';
import { LoginInputForm } from '@/components/pages/login/login-input-form/LoginInputForm';
import IsPasswordVisibleIcon from '@/components/pages/login/login-input-form/is-password-visible-icon';
import * as style from './LoginTemplate.style';

interface LoginTemplateProps {
  inputId: string;
  onChangeInputId: (event: ChangeEvent<HTMLInputElement>) => void;
  inputPw: string;
  onChangeInputPw: (event: ChangeEvent<HTMLInputElement>) => void;
  isPasswordVisible: boolean;
  onClickIsPasswordVisible: () => void;
  onClickLoginLogic: () => void;
}

export const LoginTemplate = ({
  inputId,
  onChangeInputId,
  inputPw,
  onChangeInputPw,
  isPasswordVisible,
  onClickIsPasswordVisible,
  onClickLoginLogic,
}: LoginTemplateProps) => (
  <style.Wrapper>
    <style.MainIcon />
    <style.Box>
      <LoginInputForm
        isPassword={false}
        input={inputId}
        onChange={onChangeInputId}
        isPasswordVisible={isPasswordVisible}
        onClickLoginLogic={onClickLoginLogic}
      />
      <LoginInputForm
        isPassword // true
        input={inputPw}
        onChange={onChangeInputPw}
        isPasswordVisible={isPasswordVisible}
        onClickLoginLogic={onClickLoginLogic}
      />
      <IsPasswordVisibleIcon
        isPasswordVisible={isPasswordVisible}
        onClicks={onClickIsPasswordVisible}
      />
      <style.Button onClick={onClickLoginLogic}>로그인</style.Button>
      {/* <FindLinkBox /> */}
      <SnsLoginBox />
    </style.Box>
  </style.Wrapper>
);
