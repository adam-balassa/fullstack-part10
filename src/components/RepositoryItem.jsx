import { View, Image, StyleSheet } from "react-native"
import theme from "../theme";
import RepositoryStats from "./RepositoryStats";
import Text from './Text'

const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 5
    },
    container: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 6,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          height: 4
        },
        shadowRadius: 6,
        shadowOpacity: 0.1,
    },
    repositoryHeader: {
        flexDirection: 'row',
    },
    repositoryDetails: {
        paddingHorizontal: 16
    },
    repositoryDetailLine: {
        paddingBottom: 8,
        paddingRight: 28
    },
    languagePill: {
        backgroundColor: theme.colors.primary,
        paddingVertical: 3,
        paddingHorizontal: 6,
        marginVertical: 4,
        borderRadius: 4,
        alignSelf: 'flex-start'
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8
    }
});

const RepositoryItem = ({ repository }) => {
    return <View style={styles.container}>
        <View style={styles.repositoryHeader}>
            <Image style={styles.avatar} source={{uri: repository.ownerAvatarUrl}}/>
            <View style={styles.repositoryDetails}>
                <Text fontSize='subheading' fontWeight='bold' style={styles.repositoryDetailLine}>{repository.fullName}</Text>
                <Text color='textSecondary' style={styles.repositoryDetailLine}>{repository.description}</Text>
                <View style={styles.languagePill}>
                    <Text white>{repository.language}</Text>
                </View>
            </View>
        </View>
        <View style={styles.statsContainer}>
            <RepositoryStats statValue={repository.stargazersCount} statLabel='Stars'></RepositoryStats>
            <RepositoryStats statValue={repository.forksCount} statLabel='Forks'></RepositoryStats>
            <RepositoryStats statValue={repository.ratingAverage} statLabel='Rating'></RepositoryStats>
            <RepositoryStats statValue={repository.reviewCount } statLabel='Reviews'></RepositoryStats>
        </View>
    </View>
}

export default RepositoryItem;