import { UserPropsTypes } from './types/User'
import { UserActionTypes, USER_LOGIN, USER_LOGINED, USER_INFORMATION } from "./types/types";

const initialState: UserPropsTypes = {
    isLogined: false,
    user: null
};

export default function userReducer(state = initialState, { type, payload }: UserActionTypes | any) {
    switch (type) {
        case USER_LOGIN:
            return { ...state, isLogined: payload };
        case USER_LOGINED:
            return { ...state, isLogined: !!payload, user: payload };
        case USER_INFORMATION:
            return { ...state, user: payload };
        default:
            return state;
    }
}