import React, {FC, useContext} from 'react';

import {FlatList} from 'react-native';
import {StateContext} from '../../store/context';
import {IssueItem, Pagination} from './components';
import {IssueItemProps} from './interfaces';
const RepoIssues: FC = (): JSX.Element => {
  const {getIssuesState} = useContext(StateContext) || {};
  const {issues = [], pageNumber = 1} = getIssuesState || {};
  const renderItem = ({item}: IssueItemProps) => {
    return <IssueItem {...item} />;
  };
  const issuesPerPage = 10;

  const indexOfLastPost = pageNumber * issuesPerPage;
  const indexOfFirstPost = indexOfLastPost - issuesPerPage;
  const currentPosts = issues.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <FlatList
        data={currentPosts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <Pagination issuesPerPage={issuesPerPage} totalIssues={issues.length} />
    </>
  );
};

export default RepoIssues;
