import api from "./apiInstance";

export const appApi = {
  GET_USER: (payload) => api.get("/get-user"),
  LOGIN: (payload) => api.post("/login", payload),
  SIGN_UP: (payload) => api.post("/sign-up", payload),
  FORGET_PASSWORD: (payload) => api.put("/forget-password", payload),
  RESET_PASSWORD: (payload) => api.put("/reset-password", payload),
  LOGOUT: (payload) => api.get("/logout"),
  EMAIL_VERIFICATION: (payload) => api.post("/email-verification", payload),
  RESEND_EMAIL_VERIFICATION: (payload) => api.post("/resend-email-verification", payload),
  OPEN_CANDIDATE_LISTS: () => api.get("/get-spotlight-candidates"),
};
