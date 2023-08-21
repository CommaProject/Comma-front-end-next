import React, { ChangeEvent } from 'react';

export async function getStaticProps() {
  return {
    props: {
      isNavigationVisible: false,
    },
  };
}

const Quest = () => {
  const onclick = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <>
      {/* <LineInput /> */}
      {/* <RoundInput /> */}
      {/* <SearchForm /> */}
      {/* <VerticalAlbum
        imgUrl="https://i.scdn.co/image/ab67616d00001e024ed058b71650a6ca2c04adff"
        songName="라일락"
        singerName="IU"
        onClick={onclick}
      />
      <HorizontalAlbum
        imgUrl="https://i.scdn.co/image/ab67616d00001e024ed058b71650a6ca2c04adff"
        songName="라일락"
        singerName="IU"
        timer="333"
        onClick={onclick}
      />
      <PlayerMotionAlbum />
      <Avata
        url="https://i.scdn.co/image/ab67616d00001e024ed058b71650a6ca2c04adff"
        singerName="UIOD"
        singerSubName="idsfsd"
      /> */}
    </>
  );
};

export default Quest;
