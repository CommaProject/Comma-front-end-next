import SwiperCore from 'swiper';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { postAsync } from '@/apis/API';
import { formatTime } from '@/utils/formatTime';
import { SignUpStateType } from '@/constants/types';
import { SignUpInputType } from '@/constants/types/signUpTypes';

const signUp = async (props: SignUpInputType) => {
  const { isSuccess, result } = await postAsync('/private-information', props);

  return { isSuccess, result };
};

export const useRegister = () => {
  const router = useRouter();

  const [signUpState, setSignUpState] = useState<SignUpStateType>({
    nickName: '',
    sex: 'x',
    age: 0,
    recommendTime: { meridiem: 'AM', hour: 1, min: 1 },
    genres: [],
    artistNames: [],
  });

  const signUpInput: SignUpInputType = {
    ...signUpState,
    recommendTime: formatTime(signUpState.recommendTime),
  };
  const { mutate } = useMutation(['register'], signUp, {
    onSuccess: () => {
      router.push('/');
    },
  });

  const handleRegister = () => {
    setTimeout(() => {
      mutate(signUpInput);
    }, 2000);
  };

  const handleNickNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpState({ ...signUpState, nickName: e.target.value });
  };
  const handleSelect = (name: string, value: string | number) => {
    setSignUpState({ ...signUpState, [name]: value });
  };
  const handleMeridiem = (meridiem: string) => {
    setSignUpState({
      ...signUpState,
      recommendTime: { ...signUpState.recommendTime, meridiem },
    });
  };
  const handleHour = (swiper: SwiperCore) => {
    setSignUpState({
      ...signUpState,
      recommendTime: {
        ...signUpState.recommendTime,
        hour: swiper.realIndex + 1,
      },
    });
  };
  const handleMin = (swiper: SwiperCore) => {
    setSignUpState({
      ...signUpState,
      recommendTime: { ...signUpState.recommendTime, min: swiper.realIndex },
    });
  };
  const handleArtistSelect = (artist: string) => {
    if (!signUpState.artistNames.includes(artist)) {
      setSignUpState({
        ...signUpState,
        artistNames: [...signUpState.artistNames, artist],
      });
    } else {
      const targetIndex = signUpState.artistNames.findIndex(
        (state) => state === artist,
      );
      const newState = { ...signUpState };
      newState.artistNames.splice(targetIndex, 1);
      setSignUpState({ ...newState });
    }
  };
  const handleGenreSelect = (genre: string) => {
    if (!signUpState.genres.includes(genre)) {
      setSignUpState({
        ...signUpState,
        genres: [...signUpState.genres, genre],
      });
    } else {
      const targetIndex = signUpState.genres.findIndex(
        (state) => state === genre,
      );
      const newState = { ...signUpState };
      newState.genres.splice(targetIndex, 1);
      setSignUpState({ ...newState });
    }
  };

  return {
    signUpState,
    handleNickNameInput,
    handleSelect,
    handleMeridiem,
    handleHour,
    handleMin,
    handleGenreSelect,
    handleArtistSelect,
    handleRegister,
  };
};
