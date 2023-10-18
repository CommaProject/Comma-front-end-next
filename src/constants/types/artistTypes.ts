interface ArtistResponse {
  spotifyArtistId: string;
  artistName: string;
  artistImageUrl: string;
}

export interface FavoriteArtistType {
  favoriteArtistId: number;
  artistResponse: ArtistResponse;
}
