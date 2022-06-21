import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';


const RepositoryList = ({ repositories }) => {
  const repositoryNodes = repositories.edges.map(edge => edge.node);

  return (
    <FlatList
      keyExtractor={item => item.fullName}
      data={repositoryNodes}
      renderItem={({item}) => <RepositoryItem repository={item}/>}
    />
  );
};

export default RepositoryList;