import { FlatList } from 'react-native'
import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem"
import useRepository from '../hooks/useRepository';


const SingleRepository = () => {
    const { repositoryId } = useParams()
    const { repository, loading, fetchMore } = useRepository(repositoryId);
    const reviews = loading || repository.reviews.edges.map(({ node }) => node)
    return loading ? <></> : <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem repository={repository} isExtended={true} />}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
    />
}

export default SingleRepository;