import { all } from 'redux-saga/effects';
import adSagas from './ad/ad.sagas';

export default function* rootSaga() {
  yield all([
    ...adSagas,
  ]);
};