interface Track {
  id: number;
  trackTitle: string;
  durationTimeMs: number | null;
  recommendCount: number;
  albumImageUrl: string;
  spotifyTrackId: string;
  spotifyTrackHref: string;
}

interface Artists {
  spotifyArtistId: string;
  spotifyArtistName: string;
}

interface RecommendItem {
  track: Track;
  artists: Artists;
}

export interface RecommendData {
  data: RecommendItem;
}

export interface RecommendDetailData {
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
