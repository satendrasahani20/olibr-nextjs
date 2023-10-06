import { takeEvery } from "@redux-saga/core/effects";
import { sagaEngine } from "./sagaEngine";
import { appActions } from "../action";

function* mySaga() {
  // Object.keys(appActions).map(function* (item) {
  //   yield takeEvery(item, sagaEngine);
  // });
  yield takeEvery(appActions.OPEN_CANDIDATE_LISTS, sagaEngine);
  
}

export default mySaga;
