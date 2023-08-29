import * as style from '@/components/template/profile/ProfileTemplate.style';import { PlaylistRepAlbumWithNum } from '../../common/playlist-rep-album-with-num';
export const ProfileTemplate = () => {
    return(
        <style.Wrapper>
            <style.UserInfo>
                <style.Profile/>
                <style.FollowInfo/>
            </style.UserInfo>
            <style.MyPlaylist>

            </style.MyPlaylist>
            <style.Archive>
                <style.FavoriteSong>
                    <style.AddButton/>
                </style.FavoriteSong>
                <style.FavoriteSinger>

                </style.FavoriteSinger>
            
            
            </style.Archive>

            

                
        </style.Wrapper>
    )
}