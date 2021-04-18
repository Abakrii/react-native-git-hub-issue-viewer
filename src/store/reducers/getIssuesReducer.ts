import {
  SET_LOADING,
  SET_VALIDATION_ERROR,
  SET_REQUEST_ERROR,
  SET_SUCCESS,
  SET_CURRENT_PAGE,
} from '../actionTypes';

const GetIssuesReducer = (state: any, action: any) => {
  const {
    isLoading = false,
    validationError,
    requestError,
    issues,
    pageNumber,
  } = action;
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading,
      };
    case SET_VALIDATION_ERROR:
      return {
        ...state,
        isLoading,
        validationError,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        pageNumber,
      };
    case SET_SUCCESS:
      return {
        ...state,
        isLoading,
        issues,
        requestError,
        validationError,
      };
    case SET_REQUEST_ERROR:
      return {
        ...state,
        isLoading,
        requestError,
      };

    default:
      return state;
  }
};

export default GetIssuesReducer;
