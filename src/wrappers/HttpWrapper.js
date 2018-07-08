import axios from 'axios';
import LocalStorageWrapper from './LocalStorageWrapper';

export const HttpWrapper = (uri) => {
    const getHttp = () => {
        return axios.create({
            baseURL: uri,
            timeout: 3000,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${LocalStorageWrapper.get('AUTH_TOKEN')}`
            }
        });
    };
    const get = (url) => {
        return getHttp().get(url);
    };

    const post = (url, data) => {
        return getHttp().post(url, data);
    };

    return {
        get,
        post
    };
};