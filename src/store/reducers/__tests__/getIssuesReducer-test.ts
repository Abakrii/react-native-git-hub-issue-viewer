import reducer from '../getIssuesReducer';
import * as actions from '../../actionTypes';
import expect from 'expect';

describe('post reducer', () => {
  it('should handle SET_LOADING', () => {
    const startAction = {
      type: actions.SET_LOADING,
    };
    expect(reducer({}, startAction)).toEqual({isLoading: false});
  });

  it('should handle SET_VALIDATION_ERROR', () => {
    const startAction = {
      type: actions.SET_VALIDATION_ERROR,
    };
    expect(reducer({}, startAction)).toEqual({
      isLoading: false,
      validationError: undefined,
    });
  });
  it('should handle SET_CURRENT_PAGE', () => {
    const startAction = {
      type: actions.SET_CURRENT_PAGE,
    };
    expect(reducer({}, startAction)).toEqual({
      pageNumber: undefined,
    });
  });

  it('should handle SET_SUCCESS', () => {
    const startAction = {
      type: actions.SET_SUCCESS,
    };
    expect(reducer({}, startAction)).toEqual({
      isLoading: false,
      issues: undefined,
      requestError: undefined,
      validationError: undefined,
    });
  });
  it('should handle SET_REQUEST_ERROR', () => {
    const startAction = {
      type: actions.SET_REQUEST_ERROR,
    };
    expect(reducer({}, startAction)).toEqual({
      isLoading: false,
      requestError: undefined,
    });
  });
});
