import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [selectedOrderBy, setOrderBy] = useState('latest');
  const [filter, setFilter] = useState('');
  const [debouncedFilter] = useDebounce(filter, 500);
  const orderBy = (() => {
    switch (selectedOrderBy) {
      case 'latest': return 'CREATED_AT';
      case 'highest_rated': return 'RATING_AVERAGE';
      case 'lowest_rated': return 'RATING_AVERAGE';
      default: throw `Invalid value ${selectedOrderBy}`;
    }
  })()
  const orderDirection = (() => {
    switch (selectedOrderBy) {
      case 'latest':
      case 'highest_rated': return 'DESC';
      case 'lowest_rated': return 'ASC';
      default: throw `Invalid value ${selectedOrderBy}`;
    }
  })()

  const { repositories, fetchMore } = useRepositories({orderBy, orderDirection, filter: debouncedFilter});

  const onEndReach = () => {
    fetchMore();
  };

  return !repositories ? <></> : <RepositoryListContainer {...{ 
    repositories, selectedOrderBy, setOrderBy, filter, setFilter, onEndReach
  }} />
};

export default RepositoryList;