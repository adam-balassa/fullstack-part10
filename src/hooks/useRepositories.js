import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection, filter }) => {
  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection, filter },
    fetchPolicy: 'cache-and-network',
  });

  if (error) throw error;

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    if (!canFetchMore) return;

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        orderBy, orderDirection, filter
      },
    });
  }

  return { 
    repositories: data?.repositories, 
    fetchMore: handleFetchMore,
    loading 
  };
};

export default useRepositories;