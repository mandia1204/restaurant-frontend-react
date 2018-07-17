import axios from 'axios';
import LocalStorageWrapper from './LocalStorageWrapper';
import { tokenKey } from '../util/Constants';

export const HttpWrapper = (uri) => {
  const getHttp = () => axios.create({
    baseURL: uri,
    timeout: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${LocalStorageWrapper.get(tokenKey)}`,
    },
  });
  const get = url => getHttp().get(url);

  const post = (url, data) => getHttp().post(url, data);

  return {
    get,
    post,
  };
};
