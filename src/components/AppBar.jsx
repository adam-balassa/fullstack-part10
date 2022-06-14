import Constants from 'expo-constants';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab';

const padding = 16;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + padding,
    padding,
    backgroundColor: '#222',
    shadowColor: '#000',
    shadowOffset: {
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 0.4,
    zIndex: 2
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab tabName='Repositories' link='/' />
      <AppBarTab tabName='Sign in' link='/sign-in' />
    </ScrollView>
  </View>;
};

export default AppBar;