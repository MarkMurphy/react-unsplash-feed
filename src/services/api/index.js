const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

const BASE_URL = 'https://api.unsplash.com/';

const querystring = {
  stringify(params) {
    return Object.keys(params)
      .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
  },
};

export const request = async (url, params, options = {}) => {
  if (!/\/\//.test(url)) {
    url = BASE_URL + url;
  }

  if (params) {
    if (!options.method || /GET/i.test(options.method)) {
      url += '?' + querystring.stringify(params);
    } else {
      options.body = params;
    }
  }

  options.headers = {
    Authorization: `Client-ID ${ACCESS_KEY}`,
    ...options.headers,
  };

  const response = await fetch(url, options);

  return response.json();
};

export const get = async (url, params, options) => {
  return request(url, params, { ...options, method: 'GET' });
};

export const post = async (url, params, options) => {
  return request(url, params, { ...options, method: 'POST' });
};

export default { get, post, request };
