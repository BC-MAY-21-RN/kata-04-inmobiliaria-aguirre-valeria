import * as React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Properties from '../data/Properties.json'
import PropertyCard from './PropertyCard'


export default CardsMenu = () => {

  return (
    <FlatList style={styles.list}
      vertical
      data={Properties["Properties"]}
      keyExtractor={item => item.id}
      renderItem={PropertyCard}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#000000'
  },
})