import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper as SwiperClass } from 'swiper/types';
import { SignUpStateType } from '@/constants/types';
import SignUpTemplate from '@/components/template/signup';
import { getAsync } from '@/apis/API';
import { useGetArtists } from '@/hooks/useGetArtists';

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
    artists: [],
    genres: [],
    time: { meridiem: 'AM', hour: 1, min: 1 },
  });
  const [genres, setGenres] = useState<string[]>([]);
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [slideStep, setSlideStep] = useState(0);
  const [categoryTypeState, setcategoryTypeState] = useState('artist');

  const {
    artists,
    artistsBox,
    fetchMoreLeftElement,
    fetchMoreRightElement,
    leftBox,
  } = useGetArtists();

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
    if (!signUpState.artists.includes(artist)) {
      setSignUpState({
        ...signUpState,
        artists: [...signUpState.artists, artist],
      });
    } else {
      const targetIndex = signUpState.artists.findIndex(
        (state) => state === artist,
      );
      const newState = { ...signUpState };
      newState.artists.splice(targetIndex, 1);
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

  const checkSignupStep = () => {
    switch (slideStep) {
      case 0: // 이름
        return signUpState.name.length >= 1;
      case 1: // 성별 연령
        return signUpState.gender !== 'x' && signUpState.age !== 'x';
      case 2: // 카테고리
        return (
          signUpState.artists.length >= 3 && signUpState.genres.length >= 3
        );
      case 3: // 시간
        return true;
      default:
        return false;
    }
  };

  const getGenres = async () => {
    const result = await getAsync<string[]>('/spotify/genre');
    if (result.isSuccess && result.result.data) {
      setGenres([...genres, ...result.result.data]);
    }
  };

  useEffect(() => {
    getGenres();
  }, []);

  console.log(artistsBox);
  return (
    <SignUpTemplate
      slideStep={slideStep}
      leftBox={leftBox}
      signUpState={signUpState}
      categoryTypeState={categoryTypeState}
      artists={artists}
      artistBox={artistsBox}
      genres={genres}
      leftRef={fetchMoreLeftElement}
      rightRef={fetchMoreRightElement}
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
      onClickCategory={handleCategory}
      onClickGenre={handleGenreSelect}
      onClickArtist={handleArtistSelect}
    />
  );
};

export default SignUp;
