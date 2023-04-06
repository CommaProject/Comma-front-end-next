import { ChangeEvent, useCallback, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper/types';
import SwiperCore from 'swiper';
import SignUpTemplate from '@/components/template/signup';
import { SignUpStateType } from '@/constants/types';

export async function getStaticProps() {
  return {
    props: {
      isNavigationVisible: false,
    },
  };
}

const SignUp = () => {
  const [signUpState, setSignUpState] = useState<SignUpStateType>({
    name: '',
    gender: 'x',
    age: 'x',
    artist: [],
    genre: [],
    time: { meridiem: 'AM', hour: 1, min: 1 },
  });
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [slideStep, setSlideStep] = useState(0);
  const [categoryTypeState, setcategoryTypeState] = useState('artist');

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);
  const handlePrev = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpState({ ...signUpState, name: e.target.value });
  };
  const handleSelect = (name: string, value: string) => {
    setSignUpState({ ...signUpState, [name]: value });
  };
  const handleNavBtn = () => {
    handleNext();
  };
  const handleSwiper = (swiper: SwiperClass) => {
    setSlideStep(swiper.realIndex);
  };
  const handleMeridiem = (meridiem: string) => {
    setSignUpState({
      ...signUpState,
      time: { ...signUpState.time, meridiem },
    });
  };
  const handleHour = (swiper: SwiperCore) => {
    setSignUpState({
      ...signUpState,
      time: { ...signUpState.time, hour: swiper.realIndex + 1 },
    });
  };
  const handleMin = (swiper: SwiperCore) => {
    setSignUpState({
      ...signUpState,
      time: { ...signUpState.time, min: swiper.realIndex },
    });
  };
  const handleCategory = (category: string) => {
    setcategoryTypeState(category);
  };
  const handleArtistSelect = (artist: string) => {
    setSignUpState({ ...signUpState, artist: [...signUpState.artist, artist] });
  };
  const handleGenreSelect = (genre: string) => {
    setSignUpState({ ...signUpState, genre: [...signUpState.genre, genre] });
  };

  const checkSignupStep = () => {
    switch (slideStep) {
      case 0: // 이름
        return signUpState.name.length >= 1;
      case 1: // 성별 연령
        return signUpState.gender !== 'x' && signUpState.age !== 'x';
      case 2: // 카테고리
        return signUpState.artist.length >= 3 && signUpState.genre.length >= 3;
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
      onClickNext={handleNext}
      onClickPrev={handlePrev}
      setSwiperRef={setSwiperRef}
      onSlideChange={handleSwiper}
      onChageNameInput={handleInput}
      onChangeSelect={handleSelect}
      checkSignupStep={checkSignupStep}
      onClickNavBtn={handleNavBtn}
      onChangeMeridiem={handleMeridiem}
      onChangeHour={handleHour}
      onChangeMin={handleMin}
      categoryTypeState={categoryTypeState}
      onClickCategory={handleCategory}
      onClickGenre={handleGenreSelect}
      onClickArtist={handleArtistSelect}
    />
  );
};

export default SignUp;
