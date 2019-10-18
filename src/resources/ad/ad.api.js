import apiClient from 'helpers/api';

export const fetchAds = () => {
  return apiClient.get('/ads-search/v1/engine/v1/search/rendered-paginated?size=42&sort=lst.d&cur=BYR&cat=5070&rgn=7&lang=ru');
};

export default {
  fetchAds,
};