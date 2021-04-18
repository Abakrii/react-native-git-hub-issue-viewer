import {SET_REPO_NAME} from '../actionTypes';
const SetRepoNameReducer = (state: any, action: any) => {
  const {repoName} = action;
  switch (action.type) {
    case SET_REPO_NAME:
      return {
        ...state,
        repoName: repoName,
      };
    default:
      return state;
  }
};

export default SetRepoNameReducer;
