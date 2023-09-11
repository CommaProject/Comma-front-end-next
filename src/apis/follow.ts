import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getAsync } from "./API";
import { FollowInfoType } from "../constants/types/followTypes";

const getFollowInfo  = async () => {
    const { isSuccess, result } = await getAsync<FollowInfoType>('/followings/count');
    if (isSuccess && result.data){ 
        console.log('성공',result.data,typeof(result.data));
        return result.data
    }
            
    return null
}

export const useGetFollowInfo =  () => {
    const {isLoading,data} = useQuery(['followInfo'],getFollowInfo);
    const [followingInfo,setFollowingInfo] = useState<number>(0);
    const [followersInfo,setFollowersInfo] = useState<number>(0);

    
    useEffect(() => {
        if(isLoading === false){
            console.log('isloading후',data);
            if(data){
            setFollowingInfo(data.following);
            setFollowersInfo(data.follwers);

            };
            
        }

      }, []);
      
            
    return {followingInfo, followersInfo};

}