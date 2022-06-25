import CreateReviewForm from "./CreateReviewForm";
import { useNavigate } from 'react-router-native';
import useCreateReview from '../hooks/useCreateReview';

const CreateReview = () => {
    const navigate = useNavigate();
    const { createReview } = useCreateReview();

    const onSubmit = async ({ownerName, repositoryName, rating, text}) => {
        try {
            const { repositoryId } = await createReview({
                ownerName, repositoryName, rating: Number(rating), text
            });
            if (repositoryId)
                navigate(`/repositories/${repositoryId}`);
        } catch (e) {
            console.log(e)
        }
    }
    return <CreateReviewForm onSubmit={onSubmit}/>
}

export default CreateReview;