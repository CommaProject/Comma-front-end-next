import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { LoginInputsType } from '@/constants/types';
import { postAsync } from '@/apis/API';

const logIn = async (props: LoginInputsType) => {
  const { isSuccess, result } = await postAsync('/login', props);

  return { isSuccess, result };
};

export const useLogIn = () => {
  const router = useRouter();

  const [enteredInputId, setEnteredInputId] = useState('');
  const [enteredInputPw, setEnteredInputPw] = useState('');

  const { mutate } = useMutation(['login'], logIn, {
    onSuccess: () => {
      router.push('/signup');
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