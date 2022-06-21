import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import SignInForm from './SignInForm';

const SignIn = () => {
    const { signIn } = useSignIn()
    const navigate = useNavigate();

    const onSubmit = async ({ userName, password }) => {
        try {
            const { success } = await signIn({userName, password});
            if (success) 
                navigate('/')
        } catch (e) {
            console.log(e)
        }
    };

    return <SignInForm {...{onSubmit}}/>
};

export default SignIn;