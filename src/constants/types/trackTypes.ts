export interface ArtistType {
  artistId: number;
  artistName: string;
}

export interface TrackFavoritesType {
  trackId: number;
  trackTitle: string;
  durationTimeMs: number;
  albumImageUrl: string;
  trackAlarmFlag: boolean;
  trackArtistList: ArtistType[];
}
export interface TrackType {
  trackId: string;
  trackName: string;
  artist: string;
  artistId: string;
  albumId: string;
  previewUrl: string;
  images: Array<{
    height: number;
    url: string;
    width: number;
  }>;
  popularity: number;
  releaseDate: string;
  durationMinute: string;
  durationSecond: string;
}
