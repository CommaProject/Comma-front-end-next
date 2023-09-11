import { FollowUserInfoType } from '@/constants/types/followTypes';
import { useEffect, useState } from 'react';
import * as style from '@/components/pages/followInfo/user-Info/UserInfo.style';


interface UserInfoProps{
    user: FollowUserInfoType,
    nowTouchedUser: number;
    setNowTouchedUser:  (newValue: number) => void;
}
interface Position{
    x: number  | null,
    y: number | null
}
export const UserInfo = ({user,nowTouchedUser,setNowTouchedUser}: UserInfoProps) => {
    const [isProfileImgHidden,setIsProfileImgHidden]= useState(false);
    const [isButtonHidden,setIsButtonHidden] =useState(true);

    const [touchPosition,setTouchPosition] = useState<Position>({x:null,y:null});

    const touchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        if (touchPosition.x !== null && touchPosition.y !== null){
        const distanceX = Math.abs(touchPosition.x - e.changedTouches[0].pageX);
        const distanceY = Math.abs(touchPosition.y - e.changedTouches[0].pageY);
      
        if((distanceY + distanceX > 30) && (touchPosition.x > e.changedTouches[0].pageX)&& (distanceX > distanceY)) {
          // isButtonHidden  = false로 바뀌고 isProfileImgHidden = true 
          
          setIsButtonHidden(false);
          setIsProfileImgHidden(true);
          setNowTouchedUser(user.userId);
        
        
        }
      }}
      useEffect( ()=>{
        if(nowTouchedUser !== -1 && nowTouchedUser !== user.userId){
            setIsButtonHidden(true);
          setIsProfileImgHidden(false);
        }
    }
      ,[nowTouchedUser]);
    return(
        <style.Container onTouchStart={ (e) =>setTouchPosition(
            { 
              x: e.changedTouches[0].pageX, 
              y: e.changedTouches[0].pageY
            }) } 
            onTouchEnd={touchEnd} >
          <style.UserImg style={{ display: isProfileImgHidden ? 'none' : 'flex' }}/>
          <style.Text isProfileImgHidden = {isProfileImgHidden} > {user.userNickname} </style.Text>
          {/* <style.SmallText>Follow</style.SmallText> */}
          <style.Button style={{ display:  isButtonHidden ? 'none' : 'flex' }} ><style.Img/></style.Button>
        </style.Container>
    )
}