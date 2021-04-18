import {SET_REQUEST_ERROR, SET_SUCCESS} from '../store/actionTypes';
import {getOwnerAndRepo} from '../utils/methods';

import axios from 'axios';
import {GITHUB_API} from './Endpoints';

export const callApi = (url: any, dispatch: any) => {
  const {repo, owner} = getOwnerAndRepo(url);
  axios
    .get(`${GITHUB_API}/${owner}/${repo}/issues`, {
      params: {
        state: 'all',
        per_page: 100,
        page: 1,
      },
    })
    .then(res => {
      dispatch({
        type: SET_SUCCESS,
        isLoading: false,
        issues: res.data,
        error: false,
        validationError: '',
      });
    })
    .catch(error => {
      dispatch({
        type: SET_REQUEST_ERROR,
        isLoading: false,
        requestError: error && 'Please enter a valid repo URL',
      });
    });
};
