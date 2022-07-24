import axios from 'axios';
import Config from 'react-native-config';

const APPLICATION_JSON = 'application/json';
const CONTENT_TYPE = 'Content-Type';

const client = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: APPLICATION_JSON,
    [CONTENT_TYPE]: APPLICATION_JSON,
  },
  params: {
    api_key: Config.API_KEY,
  },
});

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300/';

export default client;
