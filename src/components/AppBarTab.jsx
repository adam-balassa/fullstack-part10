import { StyleSheet, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    appBartext: {
        fontSize: 16,
        fontWeight: '700',
        color: '#EEE',
        padding: 8
    }
});

const AppBarTab = ({ tabName, link }) => {
    return <Pressable>
        <Link to={link} style={{borderRadius: 8}}>
            <Text style={styles.appBartext}>{tabName}</Text>
        </Link>
    </Pressable>
};

export default AppBarTab;