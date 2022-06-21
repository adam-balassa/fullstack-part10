import SignInForm from '../../components/SignInForm'
import { render, fireEvent, waitFor } from '@testing-library/react-native';

describe('SignIn', () => {
    describe('SignInForm', () => {
        it('sign in form can be submitted', async () => {
            const onSubmit = jest.fn();
            const { getByPlaceholderText, getByText } = render(<SignInForm onSubmit={onSubmit} />);

            fireEvent.changeText(getByPlaceholderText('Username...'), 'kalle');
            fireEvent.changeText(getByPlaceholderText('Password...'), 'password');
            fireEvent.press(getByText('Sign in'));

            await waitFor(() => {
                expect(onSubmit).toHaveBeenCalledTimes(1);
                expect(onSubmit.mock.calls[0][0]).toEqual({
                    userName: 'kalle',
                    password: 'password',
                });
            });
        });
    });
});