interface Track {
  id: number;
  trackTitle: string;
  durationTimeMs: number;
  recommendCount: number;
  albumImageUrl: string;
  spotifyTrackId: string;
  spotifyTrackHref: string;
}

interface Artist {
  spotifyArtistId: string;
  artistName: string;
  artistImageUrl: string;
}
export interface TracksRecommendData {
  track: Track;
  artist: Artist;
}

export interface TrackRecommendDetailData {
  recommendId: number;
  comment: string;
  userNickname: string | null;
  userProfileImage: string;
  playlistId: number;
  playlistTitle: string;
  repAlbumImageUrl: string | null;
  trackCount: number;
  playCount: number;
}
