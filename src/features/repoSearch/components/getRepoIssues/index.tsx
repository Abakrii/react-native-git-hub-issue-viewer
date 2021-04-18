import React, {FC, useContext, useEffect} from 'react';

import {Button} from 'react-native';
import {DispatchContext, StateContext} from '../../../../store/context';
import {SET_LOADING} from '../../../../store/actionTypes';
import {checkUrlFormat} from '../../../../utils/methods';
import {REPO_ISSUE} from '../../../../navigations/config';
import {validateUrl} from '../../../../utils/methods';

const GetRepoIssues: FC = ({navigation}: any): JSX.Element => {
  const {state, getIssuesState} = useContext(StateContext);
  const {repoName = ''} = state || {};
  const {issues = ''} = getIssuesState || {};
  const dispatch = useContext(DispatchContext);

  const getIssues = () => {
    dispatch({type: SET_LOADING, isLoading: true});
    let url: any = checkUrlFormat(repoName);
    validateUrl(url, dispatch);
  };
  useEffect(() => {
    if (issues) {
      navigation.navigate(REPO_ISSUE);
    }
  }, [issues, navigation]);
  return (
    <Button
      disabled={!repoName}
      onPress={getIssues}
      title={'Get repo issue'}
      color="coral"
    />
  );
};

export default GetRepoIssues;
