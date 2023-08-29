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

export interface CommaUserProps {
  userId: number;
  email: string;
  password: string;
  delFlag: boolean;
  role: string;
  name: string;
  nickName: string;
  age: number;
  sex: string;
  joinDate: string;
  profileImage: string;
}

export interface TrackProps {
  trackId: string;
  trackName: string;
  artist: string;
  artistId: string;
  albumId: string;
  previewUrl: string;
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
  releaseData: string;
  durationMinute: string;
  durationSecond: string;
}

export interface getHistoryProps {
  id: number;
  searchHistory: string;
}

export interface setHistoryProps {
  searchHistory: string;
}
