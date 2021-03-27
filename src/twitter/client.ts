import axios from 'axios';
import { oauth } from './oauth';

export const auth = (method: string, url: string, options: any, body: any) => {
  options['headers'] = options['headers'] || {};
  if (options['oauth']) {
    options['headers']['authorization'] = oauth(url, method, options, body);
  }
  return options;
};

export const post = ({ url, body = {}, ...options }) => {
  const method: string = 'POST';
  options.options = auth(method, url, options.options, body);
  return axios
    .post(url, {}, options.options)
    .then((res) => console.log('res', res.config.data))
    .catch((err) => console.log('axios error', err.response.data.errors));
};
