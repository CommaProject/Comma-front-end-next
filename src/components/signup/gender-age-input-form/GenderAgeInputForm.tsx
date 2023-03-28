import NameInput from '../../inputs';
import { SubTextBox } from '../../text-box';
import AgeBtnList from '../age-btn-list';
import GenderBtnList from '../gender-btn-list';
import { CommonContainer, CommonTextWrapper } from '../SignUpCommon.style';

export const GenderAgeInputForm = ({ name }: { name: string }) => {
  return (
    <div
      style={{
        height: '75%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '30px',
      }}
    >
      <CommonContainer>
        <CommonTextWrapper>
          <NameInput disabled={true} maxLength={8} value={name} />
          <SubTextBox>님</SubTextBox>
        </CommonTextWrapper>
        <SubTextBox>반갑습니다</SubTextBox>
      </CommonContainer>
      <GenderBtnList />
      <AgeBtnList />
    </div>
  );
};
