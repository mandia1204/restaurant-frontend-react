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
  const get = <T>(url: string) => getHttp().get<T>(url);

  const post = <T>(url: string, data: any) => getHttp().post<T>(url, data);

  return {
    get,
    post,
  };
};
