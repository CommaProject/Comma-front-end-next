import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { LoginInputsType } from '@/constants/types';
import { postAsync } from '@/apis/API';

const logIn = async (props: LoginInputsType) => {
  const { isSuccess, result } = await postAsync<any, any>('/login', props);

  return { isSuccess, result };
};

export const useLogIn = () => {
  const router = useRouter();

  const [enteredInputId, setEnteredInputId] = useState('testEmail');
  const [enteredInputPw, setEnteredInputPw] = useState('password');

  const { mutate } = useMutation(['login'], logIn, {
    onSuccess: (response) => {
      if (response.isSuccess && response.result.data) {
        console.log(response);
        if (response.result.data.name == null) router.push('/signup');
        else router.push('/');
      }
    },
  });

  const handleInputId = (event: ChangeEvent<HTMLInputElement>): void =>
    setEnteredInputId(event.target.value);
  const handleInputPw = (event: ChangeEvent<HTMLInputElement>): void =>
    setEnteredInputPw(event.target.value);

  const handleLogIn = () => {
    mutate({ email: enteredInputId, password: enteredInputPw });
  };

  return {
    enteredInputId,
    enteredInputPw,
    handleInputId,
    handleInputPw,
    handleLogIn,
  };
};
