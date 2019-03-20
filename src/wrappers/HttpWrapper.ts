import axios from 'axios';
import LocalStorageWrapper from './LocalStorageWrapper';
import { tokenKey } from '../util/Constants';

export const HttpWrapper = (uri: string) => {
  const getHttp = () => axios.create({
    baseURL: uri,
    timeout: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${LocalStorageWrapper.get(tokenKey)}`,
    },
  });
  const get = (url: string) => getHttp().get(url);

  const post = (url: string, data: any) => getHttp().post(url, data);

  return {
    get,
    post,
  };
};
