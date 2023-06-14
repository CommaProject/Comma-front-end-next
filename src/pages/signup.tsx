import { useCallback, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';

import SignUpTemplate from '@/components/template/signup';
import { useGetArtists } from '@/hooks/useGetArtists';
import { useGetGenres } from '@/hooks/useGetGenres';
import { useRegister } from '@/hooks/useSignUp';

export async function getStaticProps() {
  return {
    props: {
      isNavigationVisible: false,
    },
  };
}

const SignUp = () => {
  const {
    signUpState,
    handleNickNameInput,
    handleSelect,
    handleMeridiem,
    handleHour,
    handleMin,
    handleGenreSelect,
    handleArtistSelect,
    handleRegister,
  } = useRegister();
  const [slideStep, setSlideStep] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [categoryTypeState, setcategoryTypeState] = useState('artist');

  const { artists, fetchMoreRightElement } = useGetArtists();
  const { genres } = useGetGenres();

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);
  const handlePrev = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNavBtn = () => handleNext();
  const handleCategory = (category: string) => {
    setcategoryTypeState(category);
  };

  const handleSwiper = (swiper: SwiperClass) => {
    setSlideStep(swiper.realIndex);
    if (slideStep === 3) {
      handleRegister();
    }
  };

  const checkSignupStep = () => {
    switch (slideStep) {
      case 0: // 이름
        return signUpState.nickName.length >= 1;
      case 1: // 성별 연령
        return signUpState.sex !== 'x' && signUpState.age !== 0;
      case 2: // 카테고리
        return (
          signUpState.artistNames.length >= 3 && signUpState.genres.length >= 3
        );
      case 3: // 시간
        return true;
      default:
        return false;
    }
  };

  return (
    <SignUpTemplate
      slideStep={slideStep}
      signUpState={signUpState}
      categoryTypeState={categoryTypeState}
      artists={artists}
      genres={genres}
      rightRef={fetchMoreRightElement}
      onClickNext={handleNext}
      onClickPrev={handlePrev}
      setSwiperRef={setSwiperRef}
      onSlideChange={handleSwiper}
      onChageNameInput={handleNickNameInput}
      onChangeSelect={handleSelect}
      checkSignupStep={checkSignupStep}
      onClickNavBtn={handleNavBtn}
      onChangeMeridiem={handleMeridiem}
      onChangeHour={handleHour}
      onChangeMin={handleMin}
      onClickCategory={handleCategory}
      onClickGenre={handleGenreSelect}
      onClickArtist={handleArtistSelect}
    />
  );
};

export default SignUp;
