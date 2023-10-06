import { appActions } from "../../action";

const initialState = {
  devListLoading: false,
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    //It will be removed from here, it is just for example, particular action will be place here
    case `${appActions.FORGET_PASSWORD}_START`:
      return { ...state, devListLoading: true };
    case `${appActions.FORGET_PASSWORD}_SUCCESS`:
      return { ...state, devListLoading: true };
    case `${appActions.FORGET_PASSWORD}_FAIL`:
      return { ...state, devListLoading: true };

    default:
      return { ...state };
  }
};
