import axios from 'axios';

const apiUrl = 'https://cre-api.kufar.by';
const generalError = { general: ['Unexpected Error Occurred'] };

const throwApiError = ({ data, status }) => {
  const error = new Error('API: Error Ocurred');

  const errorObj = {
    ...error,
    data,
    statusCode: status,
  };

  throw errorObj;
};

const httpRequest = method => async (url, data, configs = {}) => {
  const { responseType, headers = {} } = configs;
  const options = {
    headers,
    method,
  };

  if (data) {
    if (method === 'get') {
      options.params = data;
    } else {
      options.data = data;
    }
  }

  options.responseType = responseType || 'json';
  options.url = `${apiUrl}${url}`;

  const response = await axios(options);

  if (response.status >= 200 && response.status < 300) {
    return response.data || {};
  } else if (response.status >= 400 && response.status < 500) {
    throwApiError(response);
  }

  throwApiError({ errors: [generalError] });
  return null;
};

export const getRequest = httpRequest('get');
export const postRequest = httpRequest('post');
export const putRequest = httpRequest('put');
export const deleteRequest = httpRequest('delete');

const apiClient = {
  get: getRequest,
  post: postRequest,
  put: putRequest,
  delete: deleteRequest,
};

export default apiClient;
