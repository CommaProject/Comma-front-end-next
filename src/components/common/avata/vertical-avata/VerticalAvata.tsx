import { Avata } from '@/components/common/avata';

import * as style from './VerticalAvata.style';

interface VerticalAvataProps {
  avatarImage: string;
  avartarName: string;
  onClick: () => void;
}

export const VerticalAvata = ({
  avatarImage,
  avartarName,
  onClick,
}: VerticalAvataProps) => (
  <style.AvatarBox onClick={onClick}>
<<<<<<< HEAD
    {avatarImage? 
    <Avata url={avatarImage || 'error: undefined'} size={89} />
  :<style.EmptyImage/>}
=======
    <Avata url={avatarImage || 'error: undefined'} size={89} />
>>>>>>> 7f708f55ef153eda30553c9657c58e56d29901b9
    <style.AvatartName>{avartarName}</style.AvatartName>
  </style.AvatarBox>
);
