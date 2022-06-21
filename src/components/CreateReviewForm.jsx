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
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: ''
};

const validationSchema = yup.object().shape({
    ownerName: yup
        .string()
        .min(3, 'Owner name must be longer than 3')
        .required('Owner name is required'),

    repositoryName: yup
        .string()
        .min(3, 'Repository name must be longer than 3')
        .required('Repository name is required'),

    rating: yup
        .number()
        .min(0, 'Rating must be a number between 0 and 100')
        .max(100, 'Rating must be a number between 0 and 100')
        .required('Rating is required'),

    text: yup.string()

});

const CreateReviewForm = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {({ handleSubmit }) => ( // TODO
                <View style={styles.container}>
                    <FormikTextInput name='userName' placeholder="Username..." />
                    <FormikTextInput name='password' placeholder="Password..." secureTextEntry />
                    <Button text='Sign in' onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    )
};

export default CreateReviewForm;