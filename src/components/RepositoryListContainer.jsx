import React from 'react';
import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import RepositoryFilter from './RepositoryFilter';


class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { selectedOrderBy, setOrderBy, filter, setFilter} = this.props
    return <RepositoryFilter {...{selectedOrderBy, setOrderBy, filter, setFilter}}/>
  }

  render() {
    const { repositories } = this.props
    this.repositoryNodes = repositories.edges.map(edge => edge.node);
    
    return (
      <FlatList
        keyExtractor={item => item.fullName}
        data={this.repositoryNodes}
        ListHeaderComponent={this.renderHeader}
        renderItem={({item}) => <RepositoryItem repository={item}/>}
        onEndReached={this.props.onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

export default RepositoryListContainer;