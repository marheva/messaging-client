const USER_LOGIN = "USER/USER_LOGIN";
const USER_LOGINED = "USER/USER_LOGINED";
const USER_INFORMATION = "USER/USER_INFORMATION";

export interface UserLoginAction {
  type: typeof USER_LOGIN;
}

export interface UserLoginedAction {
  type: typeof USER_LOGINED;
}

export interface UserInformationAction {
  type: typeof USER_INFORMATION;
}

export type UserActionTypes = UserLoginAction | UserLoginedAction | UserInformationAction;

export { USER_LOGIN, USER_LOGINED, USER_INFORMATION };
