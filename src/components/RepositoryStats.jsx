import { StyleSheet, View } from 'react-native';
import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        padding: 12
    },
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    }
});

const RepositoryStats = ({ statValue, statLabel }) => {
    const formattedStatValue = statValue > 1000 ? `${Math.round(statValue / 100) / 10}k` : statValue

    return <View style={styles.container}>
        <Text bold center>{formattedStatValue}</Text>
        <Text center>{statLabel}</Text>
    </View>;
};

export default RepositoryStats;