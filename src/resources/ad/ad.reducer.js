import {
  FETCH_ADS_SUCCEEDED,
} from './ad.actions';

const initialState = {
  ads: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADS_SUCCEEDED: {
      const payload = action.payload.ads
        .map((ad) => {
          const params = ad.ad_parameters
            .reduce((acc, param) => ({
              ...acc,
              [param.p]: {
                label: param.pl,
                value: param.vl,
              },
            }), {})
          return {
            ...ad,
            params,
          };
        });
      const ads = [
        ...state.ads,
        ...payload,
      ];
      console.log(ads)

      return {
        ...state,
        ads,
      };
    }

    default:
      return state;
  }
};
