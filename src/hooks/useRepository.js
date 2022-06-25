import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
    const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORY, {
        variables: { id },
        fetchPolicy: 'cache-and-network',
    });

    if (error) throw error;



  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository?.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) return;

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        id
      },
    });
  }

    return { repository: data && data.repository, loading, fetchMore: handleFetchMore };
}

export default useRepository;