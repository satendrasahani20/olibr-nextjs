import { put, call } from "redux-saga/effects";
import { appActions } from "../../action";
import { appApi } from "../../api";
import { route } from "../../../components/common/navigate/router";

export function* sagaEngine({type, payload }) {
  try {
    yield put({ type: `${appActions[type]}_START` });
    const response = yield call(appApi[type], payload);
    if (response.data.status === 401) {
      yield put({ type: `${appActions[type]}_FAIL` });
      route("/login");
    } else {
      yield put({
        type: `${appActions[type]}_SUCCESS`,
        payload: response.data,
      });
    }
  } catch (error) {
    yield put({ type: `${appActions[type]}_FAIL` });
  }
}
