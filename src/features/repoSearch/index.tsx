import React, {FC, useContext} from 'react';

import styles from './styles';
import {View, Text} from 'react-native';
import {Content, Loader} from '../../core/components';
import {StateContext} from '../../store/context';
import {SetRepoName, GetRepoIssues} from './components';
const {searchIssueView, textError} = styles;

const RepoSearch: FC = ({navigation}: any): JSX.Element => {
  const {getIssuesState} = useContext(StateContext) || {};
  const {validationError, requestError, isLoading = false} =
    getIssuesState || {};
  return isLoading ? (
    <Loader />
  ) : (
    <View style={searchIssueView}>
      <Content>
        <SetRepoName />
        <GetRepoIssues navigation={navigation} />
        <Text style={textError}>
          {requestError ? requestError : validationError}
        </Text>
      </Content>
    </View>
  );
};

export default RepoSearch;
