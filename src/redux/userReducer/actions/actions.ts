import { fetchLoginUser, getSession } from "../../../Api/utils/rest/auth/fetch";
import { getUserInformation } from "../../../Api/utils/rest/user/fetch";
import { hideLoader, showLoader } from "../../appReducer/actions";
import { UserActions } from "../../rootTypes";
import { USER_LOGIN, USER_LOGINED, USER_INFORMATION } from "../types/types";

export function userLogin(email: string, password: string): (dispatch: any) => Promise<void> {
  return async (dispatch) => {
    dispatch(showLoader());
    const {
      data: { error, message, additional },
    }: any = await fetchLoginUser(email, password);

    try {
      dispatch({
        type: USER_LOGIN,
        payload: additional,
      });
      dispatch(userInformation(additional));
    } catch (error) {
      dispatch(hideLoader());
    }
  };
}

export function userInformation(userId: string): (dispatch: any) => Promise<void> {
  return async (dispatch) => {
    const {
      data: { error, message, additional },
    }: any = await getUserInformation(userId);
    try {
      dispatch({
        type: USER_INFORMATION,
        payload: additional,
      });
      dispatch(hideLoader());
    } catch (error) {
      dispatch(hideLoader());
    }
  };
}

export function userLogined(): (dispatch: any) => Promise<void> {
  return async (dispatch) => {
    dispatch(showLoader());
    const {
      data: { error = true, message, additional },
    }: any = await getSession();
    try {
      dispatch({
        type: USER_LOGINED,
        payload: additional,
      });
      dispatch(hideLoader());
    } catch (error) {
      dispatch(hideLoader());
    }
  };
}
