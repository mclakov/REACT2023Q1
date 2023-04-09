import { response } from 'msw';
import { API_KEY } from '../common/constants';
import { TSearchImagesParams, TSearchInfoParams, TSearchParams } from '../types';

export async function flickr(method: string, params: TSearchImagesParams | TSearchInfoParams) {
  try {
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
    if (!response.ok) {
      throw Error('could not fetch the data');
    }
    const fetchedData = await response.json();
    return fetchedData;
  } catch (error) {
    throw error;
  }
}
