import { appActions } from "../../action";

export const loginAction = (navigate, loginData, setUser, setResendVerify) => ({
  type: appActions.LOGIN,
  navigate,
  payload: { setUser, setResendVerify, loginData },
});

export const signUpAction = (navigate, signUpData, setResend) => ({
  type: appActions.SIGN_UP,
  navigate,
  payload: { signUpData, setResend },
});

export const forgetPasswordAction = (
  navigate,
  email,
  setResendEmail,
  reset
) => ({
  type: appActions.FORGET_PASSWORD,
  navigate,
  payload: { email, setResendEmail, reset },
});

export const resetPasswordAction = (navigate, params, reset) => ({
  type: appActions.RESET_PASSWORD,
  navigate,
  payload: { params, reset },
});

export const logoutAction = (navigate, setUser, socket, userId) => ({
  type: appActions.LOGOUT,
  navigate,
  payload: { setUser, socket, userId },
});

export const emailVerificationAction = (navigate, params, setColorName) => ({
  type: appActions.EMAIL_VERIFICATION,
  navigate,
  payload: { params, setColorName },
});

export const resendEmailVerificationAction = (navigate, email, reset) => ({
  type: appActions.RESEND_EMAIL_VERIFICATION,
  navigate,
  payload: { email, reset },
});
