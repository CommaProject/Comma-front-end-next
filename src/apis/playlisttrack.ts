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
    }else{
            console.log('실패함',isSuccess,result.data);
            return []
            
        }
    
}

export const useGetPlaylistTracks = (playlistId: string) => {
    const[playlistTracks,setPlaylistTracks]= useState<TrackType[]>([]);
    
    if( typeof(playlistId) === "string"){
    
    const {isSuccess,data} = useQuery(['playlistTracks'],() => getPlaylistTracks(parseInt(playlistId)));
    useEffect( ()=>{
    if(isSuccess && data.length !== 0){
        console.log(playlistId,data);
        setPlaylistTracks(data);
        
    }
    },[data]);

    
    }
    
    return {playlistTracks};
    
    

}