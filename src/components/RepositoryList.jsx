import { FlatList } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';


const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      keyExtractor={item => item.fullName}
      data={repositoryNodes}
      renderItem={({item}) => <RepositoryItem repository={item}/>}
    />
  );
};

export default RepositoryList;