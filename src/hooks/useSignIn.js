import { useMutation, useApolloClient } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';


const useSignIn = () => {
    const apolloClient = useApolloClient()
    const authStorage = useAuthStorage();
    const [mutate, { data, error }] = useMutation(AUTHENTICATE);

    const signIn = async ({ userName, password }) => {
        const { data: { authenticate: { accessToken }}} = await mutate({ variables: { userName, password } });
        await authStorage.setAccessToken(accessToken);
        apolloClient.resetStore();
        return { success: true }
        
    }
    return { signIn, data, error };
};

export default useSignIn;