import { getAsync } from "@/apis/API";
import { useEffect, useState } from "react";
import {  useQuery } from "@tanstack/react-query";
import { TrackType } from "../constants/types/trackTypes";


const getPlaylistTracks = async (
    playlistId: number,
) => {
    const { isSuccess, result } = await getAsync<TrackType[]>(`/playlists/tracks/${playlistId}`);
    
    if (isSuccess && result.data){ 
        console.log('트랙',result.data);
        return result.data
    }
    
    return []
        
        }


export const useGetPlaylistTracks = (playlistId: string | string[]| undefined) => {
    const[playlistTracks,setPlaylistTracks]= useState<TrackType[]>([]);
    
    const { isSuccess, data } = useQuery(
        ['playlistTracks'],
        () => getPlaylistTracks(parseInt(playlistId as string, 10)),
        {
          enabled: typeof playlistId === "string", // 조건에 따라 훅 사용 여부 결정
        }
      );
    
      useEffect(() => {
        if (isSuccess && data.length !== 0) {
          setPlaylistTracks(data);
        }
      }, [data, isSuccess, playlistId]);
    
      return { playlistTracks };

}