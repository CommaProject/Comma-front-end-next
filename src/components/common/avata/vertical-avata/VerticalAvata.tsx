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
    <Avata url={avatarImage || 'error: undefined'} size={89} />
    <style.AvatartName>{avartarName}</style.AvatartName>
  </style.AvatarBox>
);
