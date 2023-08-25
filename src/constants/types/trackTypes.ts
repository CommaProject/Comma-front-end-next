export interface ArtistType{
    "artistId" : number,
    "artistName" : string
}

export interface TrackType{
    "trackId" : number,
    "trackTitle" : string,
    "durationTimeMs" : number,
    "albumImageUrl" : string,
    "trackAlarmFlag" : boolean,
    "trackArtistList" :ArtistType[]

}