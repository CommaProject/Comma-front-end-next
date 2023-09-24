export interface UserDetailType {
    userId: number;
    email: string;
    password: string;
    delFlag: false;
    role: string;
    name: null | string; // 또는 필요에 따라 타입을 조정하세요
    nickName: null | string; // 또는 필요에 따라 타입을 조정하세요
    age: number;
    sex: null | string; // 또는 필요에 따라 타입을 조정하세요
    joinDate: null | string; // 또는 필요에 따라 타입을 조정하세요
    profileImage: null | string; // 또는 필요에 따라 타입을 조정하세요
  }