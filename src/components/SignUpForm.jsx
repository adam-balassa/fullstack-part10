import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import { View, StyleSheet } from 'react-native';
import Button from './Button';
import * as yup from 'yup';

const styles = StyleSheet.create({
    container: {
        marginTop: 64,
        marginHorizontal: 32
    }
});

const initialValues = {
    userName: '',
    password: '',
    passwordConfirmation: ''
};

const validationSchema = yup.object().shape({
    userName: yup
        .string()
        .min(3, 'Username must be longer than 3')
        .required('Username is required'),
    password: yup
        .string()
        .min(5, 'Password must be longer than 5')
        .max(50, 'Password can\'t be longer than 50')
        .required('Password is required'),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], 'The two passwords don\'t match')
        .required('The two passwords don\'t match')
});

const SignUpForm = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {({ handleSubmit }) => (
                <View style={styles.container}>
                    <FormikTextInput name='userName' placeholder="Username..." />
                    <FormikTextInput name='password' placeholder="Password..." secureTextEntry />
                    <FormikTextInput name='passwordConfirmation' placeholder="Confirm passford..." secureTextEntry />
                    <Button text='Sign up' onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    )
};

export default SignUpForm;