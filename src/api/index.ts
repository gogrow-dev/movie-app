import axios from 'axios';
import Config from 'react-native-config';

const APPLICATION_JSON = 'application/json';
const CONTENT_TYPE = 'Content-Type';

// FIXME: Should be added to a user reducer and append to http request
// in an axios interceptor
const sessionId = '40ccfee8b30b5955732e8baa4e718bfa3476654a';

const client = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: APPLICATION_JSON,
    [CONTENT_TYPE]: APPLICATION_JSON,
  },
  params: {
    api_key: Config.API_KEY,
    session_id: sessionId,
  },
});

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300/';
export const ACCOUNT_ID = 13454200;

export default client;
