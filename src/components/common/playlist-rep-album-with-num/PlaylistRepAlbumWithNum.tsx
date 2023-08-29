import { Album } from '../album/Album';
import * as style from './PlaylistRepAlbumWithNum.style';

const PlaylistRepAlbumWithNum = () => {
    const playlist = {
        url: "",
        trackCount : 3 
    }
    return (
        <style.Container>
             <Album url={""} size={81.5} />
             {playlist.trackCount-1> 0 ? <style.TrackNumInfo>+{playlist.trackCount-1}</style.TrackNumInfo>: ''}

        </style.Container>
    );


}

export default PlaylistRepAlbumWithNum;