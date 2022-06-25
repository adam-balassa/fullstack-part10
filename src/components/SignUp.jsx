import SignUpForm from "./SignUpForm";
import useSignUp from '../hooks/useSignUp';
import { useNavigate } from 'react-router-native';

const SignUp = () => {
    const { signUp } = useSignUp();
    const navigate = useNavigate();

    const onSubmit = async ({ userName, password }) => {
        const { success } = await signUp({ userName, password })
        if (success)
            navigate('/')

    }
    return <SignUpForm {...{onSubmit}} />
}

export default SignUp