import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';


const RepositoryList = () => {
  const { repositories, loading } = useRepositories();
  return loading ? <></> : <RepositoryListContainer {...{repositories}}/>
};

export default RepositoryList;