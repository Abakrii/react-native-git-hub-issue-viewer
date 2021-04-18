import reducer from '../getIssuesReducer';
import * as actions from '../../actionTypes';
import expect from 'expect';

describe('Repo Name reducer', () => {
  it('should handle SET_REPO_NAME', () => {
    const startAction = {
      type: actions.SET_REPO_NAME,
    };
    expect(reducer({}, startAction)).toEqual({repoName: undefined});
  });
});
