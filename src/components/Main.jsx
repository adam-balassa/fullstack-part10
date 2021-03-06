import { Route, Routes, Navigate } from 'react-router-native';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SingleRepository from './SingleRepository';
import CreateReview from '../components/CreateReview';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8'
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>

      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/repositories/:repositoryId" element={<SingleRepository />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/review" element={<CreateReview />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;