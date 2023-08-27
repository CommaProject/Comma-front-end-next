export interface SpotifyArtistProps {
  artistId: string;
  artistName: string;
  genres: string[];
  images: [
    {
      height: number;
      url: string;
      width: number;
    },
    {
      height: number;
      url: string;
      width: number;
    },
    {
      height: number;
      url: string;
      width: number;
    },
  ];
  popularity: number;
}

export interface getHistoryProps {
  id: number;
  searchHistory: string;
}

export interface setHistoryProps {
  searchHistory: string;
}
