import React, {FC, useContext} from 'react';
import styles from './styles';
import {TextInput} from 'react-native';
import {DispatchContext, StateContext} from '../../../../store/context';
import {SET_REPO_NAME} from '../../../../store/actionTypes';

const {input} = styles;

const SetRepoName: FC = (): JSX.Element => {
  const dispatch = useContext(DispatchContext);
  const {state} = useContext(StateContext) || {};
  const {repoName} = state || {};
  const onChangeTextInput = (value: string) => {
    dispatch({type: SET_REPO_NAME, repoName: value});
  };
  return (
    <TextInput
      style={input}
      placeholder={'Paste a link to a GitHub repo!'}
      onChangeText={onChangeTextInput}
      value={repoName}
    />
  );
};

export default SetRepoName;
