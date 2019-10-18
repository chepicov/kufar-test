export const FETCH_ADS = 'fetchAds';
export const FETCH_ADS_SUCCEEDED = 'fetchAdsSucceeded';
export const FETCH_ADS_FAILED = 'fetchAdsFailed';

export const fetchAds = dispatch => () =>
  dispatch({ type: FETCH_ADS });