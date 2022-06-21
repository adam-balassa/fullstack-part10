import { format } from 'date-fns'
import { View, StyleSheet } from "react-native"
import theme from "../theme";
import Text from './Text'

const styles = StyleSheet.create({
    ratingContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderColor: theme.colors.primary,
        borderWidth: 2
    },
    container: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginHorizontal: 10,
        marginVertical: 6,
        borderRadius: 6,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          height: 4
        },
        shadowRadius: 6,
        shadowOpacity: 0.1,
    },
    reviewDetailsContainer: {
        paddingLeft: 12
    },
    dateLine: {
        paddingTop: 8,
        paddingBottom: 16
    },
    descriptionLine: {
        paddingRight: 48
    }
});

const ReviewItem = ({ review }) => {
    const { createdAt } = review;
    const createdAtFormatted = format(new Date(createdAt), 'yyyy. MM. dd')
    return <View style={styles.container}>
        <View style={styles.ratingContainer}>
            <Text color='primary' fontSize='subheading' bold>{review.rating}</Text>
        </View>
        <View style={styles.reviewDetailsContainer}>
            <Text fontSize='subheading' bold>{review.user.username}</Text>
            <Text color='textSecondary' style={styles.dateLine}>{createdAtFormatted}</Text>
            <Text style={styles.descriptionLine}>{review.text}</Text>
        </View>
    </View>
}

export default ReviewItem;