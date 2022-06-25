import { useMutation } from '@apollo/client';
import useSignIn from './useSignIn';
import { SIGN_UP } from '../graphql/mutations';


const useSignUp = () => {
    const { signIn } = useSignIn()
    const [ mutate ] = useMutation(SIGN_UP);

    const signUp = async ({ userName, password }) => {
        const { data: { createUser: { id }}} = await mutate({ variables: { userName, password } })
        await signIn({ userName, password });
        return { success: true, id }
    }
    return { signUp };
};

export default useSignUp;