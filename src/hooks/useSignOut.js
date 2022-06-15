import { useQuery, useApolloClient } from '@apollo/client';
import { GET_ME } from '../graphql/queries';
import useAuthStorage from './useAuthStorage';

const useSignOut = () => {
  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage();
  const { data } = useQuery(GET_ME, {
    fetchPolicy: 'network-only',
  });


  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  }

  return { isLoggedIn: data && data.me && data.me.id, signOut };
};

export default useSignOut;