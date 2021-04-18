import React, {useContext} from 'react';
import {View, Button} from 'react-native';
import styles from './style';
import {SET_CURRENT_PAGE} from '../../../../store/actionTypes';
import {PaginationProps} from './infterfces';
import {DispatchContext} from '../../../../store/context';
const {paginationContainer, paginationButton} = styles;

const Pagination = ({issuesPerPage, totalIssues}: PaginationProps) => {
  const dispatch = useContext(DispatchContext);
  const paginate = (pageNumber: number) => {
    dispatch({
      type: SET_CURRENT_PAGE,
      pageNumber,
    });
  };

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalIssues / issuesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <View style={paginationContainer}>
      {pageNumbers.map(number => (
        <View key={number} style={paginationButton}>
          <Button onPress={() => paginate(number)} title={number.toString()} />
        </View>
      ))}
    </View>
  );
};

export default Pagination;
