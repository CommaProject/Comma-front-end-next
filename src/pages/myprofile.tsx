import { ProfileTemplate } from "@/components/template/profile/ProfileTemplate";
import { useState } from "react";
import { useGetMultiplePlaylists } from "../apis/playlist";


const Profile = () =>{
    const { playlist } = useGetMultiplePlaylists();
    
    const[isProfileMine]= useState(true);
    return (<ProfileTemplate
    isProfileMine = {isProfileMine}
    playlist= {playlist}
    /> );

};

export default Profile;