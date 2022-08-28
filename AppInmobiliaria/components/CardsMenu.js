import * as React from 'react'
import { FlatList } from 'react-native'
import Properties from '../src/data/Properties.json'
import PropertyCard from './PropertyCard'


export default CardsMenu = () => {

  return (
    <FlatList
      vertical
      data={Properties["Properties"]}
      keyExtractor={item => item.id}
      renderItem={PropertyCard}
    />
  );
};