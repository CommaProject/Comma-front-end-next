
// 플레이리스트 정보 
// api명세서 플레이리스트 상세 참고함


export interface PlaylistType {
  playlistId: number;
  playlistTitle: string;
  alarmFlag: boolean;
  alarmStartTime: string;
  trackCount: number;
  repAlbumImageUrl: string;
  

}

export interface PlaylistTypeWithTotalTime extends PlaylistType {
  totalDurationTime: number;
}