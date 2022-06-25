import ModalSelector from 'react-native-modal-selector'
import { Searchbar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const RepositoryFilter = ({ selectedOrderBy, setOrderBy, filter, setFilter }) => {
    const styles = StyleSheet.create({
        container: {
            padding: 15
        },
        filterContainer: {
            paddingVertical: 15,
            marginBottom: 10
        }
    })
    let index = 0;
    const items = [
        { key: index++, label: 'Latest repositories', value: 'latest' },
        { key: index++, label: 'Highest rated repositories', value: 'highest_rated' },
        { key: index++, label: 'Lowest rated repositories', value: 'lowest_rated' },
    ]

    return <View style={styles.container}>

        <View style={styles.filterContainer}>
            <Searchbar
                placeholder="Filter repositories..."
                onChangeText={setFilter}
                value={filter}
            />
        </View>
        <ModalSelector
            data={items}
            initValue={items.find(it => it.value === selectedOrderBy).label}
            onChange={item => setOrderBy(item.value)}>
            <Text fontSize='subheading'> {items.find(it => it.value === selectedOrderBy).label}</Text>
        </ModalSelector>
    </View>
}

export default RepositoryFilter;