import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';


const useCreateReview = () => {
    const [mutate, { data, error }] = useMutation(CREATE_REVIEW);

    const createReview = async review => {
        console.log(review);
        const { data: { createReview: { repositoryId } } } = await mutate({ variables: { review } });
        return { repositoryId  }
        
    }
    return { createReview, data, error };
};

export default useCreateReview;