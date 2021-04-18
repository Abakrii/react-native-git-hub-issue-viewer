import React from 'react';

import styles from './styles';
import {View, Text} from 'react-native';

const {issueContainer, itemStyle} = styles;
import {IssueItemProps} from '../../interfaces';
const IssueItem = (props: IssueItemProps): JSX.Element => {
  return (
    <View style={issueContainer}>
      <Text style={itemStyle}>number: {props.number}</Text>
      <Text style={itemStyle}>id: {props.id}</Text>
      <Text style={itemStyle}>title: {props.title}</Text>
      <Text style={itemStyle}>body: {props.body}</Text>
    </View>
  );
};

export default IssueItem;
