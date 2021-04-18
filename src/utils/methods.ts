import {isURL} from 'validator';
import {callApi} from '../network/apis';
import {SET_VALIDATION_ERROR} from '../store/actionTypes';
import {URL} from 'react-native-url-polyfill';

export const checkUrlFormat = (url: any) => {
  if (url !== undefined) {
    if (url.startsWith('www')) {
      return 'https://' + url;
    } else {
      return url;
    }
  }
};

export const getOwnerAndRepo = (url: any) => {
  const githubObject: any = {};
  if (url.host === 'github.com') {
    const array = url.pathname.split('/');
    githubObject.owner = array[1] || '';
    githubObject.repo = array[2] || '';
  }
  return githubObject;
};

export const validateUrl = (url: any, dispatch: any) => {
  if (isURL(url)) {
    url = new URL(url);
    callApi(url, dispatch);
  } else {
    dispatch({
      type: SET_VALIDATION_ERROR,
      isLoading: false,
      validationError: 'Invalid URL, please try again',
    });
  }
};
