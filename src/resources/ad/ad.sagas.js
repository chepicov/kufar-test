import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_ADS, FETCH_ADS_FAILED, FETCH_ADS_SUCCEEDED } from './ad.actions';
import api from './ad.api';

function* fetchAds(action) {
  try {
    const ads = yield call(api.fetchAds, action.payload);
    yield put({ type: FETCH_ADS_SUCCEEDED, payload: ads });
  } catch (e) {
    yield put({ type: FETCH_ADS_FAILED, message: e.message });
  }
}

export default [
  takeEvery(FETCH_ADS, fetchAds),
];