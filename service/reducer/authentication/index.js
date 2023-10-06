import { appActions } from "../../action";

const initialState = {
  devListLoading: false,
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    //Login
    case `${appActions.LOGIN}_START`:
      return { ...state, devListLoading: true };
    case `${appActions.LOGIN}_SUCCESS`:
      return { ...state, devListLoading: true };
    case `${appActions.LOGIN}_FAIL`:
      return { ...state, devListLoading: true };

    //Sign up
    case `${appActions.SIGN_UP}_START`:
      return { ...state, devListLoading: true };
    case `${appActions.SIGN_UP}_SUCCESS`:
      return { ...state, devListLoading: true };
    case `${appActions.SIGN_UP}_FAIL`:
      return { ...state, devListLoading: true };

    //Forgot password
    case `${appActions.FORGET_PASSWORD}_START`:
      return { ...state, devListLoading: true };
    case `${appActions.FORGET_PASSWORD}_SUCCESS`:
      return { ...state, devListLoading: true };
    case `${appActions.FORGET_PASSWORD}_FAIL`:
      return { ...state, devListLoading: true };

    //Reset password
    case `${appActions.RESET_PASSWORD}_START`:
      return { ...state, devListLoading: true };
    case `${appActions.RESET_PASSWORD}_SUCCESS`:
      return { ...state, devListLoading: true };
    case `${appActions.RESET_PASSWORD}_FAIL`:
      return { ...state, devListLoading: true };

    //Logout
    case `${appActions.LOGOUT}_START`:
      return { ...state, devListLoading: true };
    case `${appActions.LOGOUT}_SUCCESS`:
      return { ...state, devListLoading: true };
    case `${appActions.LOGOUT}_FAIL`:
      return { ...state, devListLoading: true };

    //Email verification
    case `${appActions.EMAIL_VERIFICATION}_START`:
      return { ...state, devListLoading: true };
    case `${appActions.EMAIL_VERIFICATION}_SUCCESS`:
      return { ...state, devListLoading: true };
    case `${appActions.EMAIL_VERIFICATION}_FAIL`:
      return { ...state, devListLoading: true };

    //Resent email verification
    case `${appActions.RESEND_EMAIL_VERIFICATION}_START`:
      return { ...state, devListLoading: true };
    case `${appActions.RESEND_EMAIL_VERIFICATION}_SUCCESS`:
      return { ...state, devListLoading: true };
    case `${appActions.RESEND_EMAIL_VERIFICATION}_FAIL`:
      return { ...state, devListLoading: true };

    //Get user
    case `${appActions.GET_USER}_START`:
      return { ...state, devListLoading: true };
    case `${appActions.GET_USER}_SUCCESS`:
      return { ...state, devListLoading: true };
    case `${appActions.GET_USER}_FAIL`:
      return { ...state, devListLoading: true };

    default:
      return { ...state };
  }
};
