import moment from 'moment';
import 'moment/locale/ru';

export const getThumbLink = (image) => (
  image ? `https://content.kufar.by/line_thumbs_2x/${image.id.substring(0, 2)}/${image.id}.jpg` : ''
);

export const getLocation = (params) => {
  const location = [];
  if (params.region && params.region.value) {
    location.push(params.region.value);
  }
  if (params.area && params.area.value) {
    location.push(params.area.value);
  }
  return location.slice(0, 2).join(', ');
};

export const getFormattedTime = (time) => {
  moment.locale('ru');
  return moment(time).fromNow();
}