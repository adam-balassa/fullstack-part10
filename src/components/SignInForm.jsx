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
};

const validationSchema = yup.object().shape({
    userName: yup
        .string()
        .min(3, 'Username must be longer than 3')
        .required('Username is required'),
    password: yup
        .string()
        .min(8, 'Password must be longer than 3')
        .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {({ handleSubmit }) => (
                <View style={styles.container}>
                    <FormikTextInput name='userName' placeholder="Username..." />
                    <FormikTextInput name='password' placeholder="Password..." secureTextEntry />
                    <Button text='Sign in' onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    )
};

export default SignInForm;