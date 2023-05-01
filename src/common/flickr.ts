import { API_KEY } from '../common/constants';
import { TSearchImagesParams, TSearchInfoParams, TSearchParams } from '../types';

export async function flickr(method: string, params: TSearchImagesParams | TSearchInfoParams) {
  const url = new URL('https://www.flickr.com/services/rest');
  const flickrParams: TSearchParams = {
    method: `flickr.${method}`,
    api_key: API_KEY,
    format: 'json',
    nojsoncallback: '1',
    ...params,
  };
  url.search = new URLSearchParams(flickrParams).toString();
  const response = await fetch(url.href);
  const fetchedData = await response.json();
  return fetchedData;
}
