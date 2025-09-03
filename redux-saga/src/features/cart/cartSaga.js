// call, put, takeEvery, takeLatest are effects of redux saga
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchAsync, fetchAsyncFulfilled } from "./CartSlice";
import { addItem, fetchItems } from "./cartAPI";

// Worker saga will be fired on fetchAsyncFulfilled actions
function* getCardItems(action) {
  const response = yield call(fetchItems);
  // put is like dispatch
  yield put({ type: fetchAsyncFulfilled.toString(), payload: response.data });
}

function* addCardItems(action) {
  const response = yield call(addItem,action.payload);
  yield put({ type: fetchAsyncFulfilled.toString(), payload: response.data });
}

// Starts fetchAsync on each dispatched fetchAsyncFulfilled action
// Allows concurrent fetches of user
export function* mySaga() {
  // anything call infront of yield are sideEffects
  yield takeEvery(fetchAsync.toString(), getCardItems);
}

// call apply bind in js?
// call(fetchItems) is same as fetchItems() but this is more reliable for testing
