interface Track {
  id: number;
  trackTitle: string;
  durationTimeMs: number;
  recommendCount: number;
  albumImageUrl: string;
  spotifyTrackId: string;
  spotifyTrackHref: string;
}
export interface ArtistType {
  spotifyArtistId: string;
  artistName: string;
  artistImageUrl: string;
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
  durationMinute: number;
  durationSecond: number;
}

// export interface TrackPlayCountType {
//   playCount: number;
//   track: {
//     id: number;
//     trackTitle: string;
//     durationTimeMs: number;
//     recommendCount: number;
//     albumImageUrl: string;
//     spotifyTrackId: string;
//     spotifyTrackHref: string;
//   };
// }

//
interface TrackArtist {
  track: Track;
  artist: ArtistType;
}

export interface TrackAlarmFlagType {
  trackAlarmFlag: boolean;
  trackArtistList: TrackArtist[];
}

// Track Count
export interface TrackPlayCountType {
  playCount: number;
  trackArtist: TrackArtist;
}

// Track Favorites Type

export interface TrackArtistResponse {
  track: Track;
  artist: ArtistType;
}

export interface TrackFavoritesType {
  favoriteTrackId: number;
  trackArtistResponses: TrackArtistResponse[];
}

export interface EnhancedTrackProps extends TrackType {
  isFavorite: boolean;
}
