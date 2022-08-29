import React from 'react'
import {View, StyleSheet, TouchableOpacity } from 'react-native'
import PropertyImage from '../components/PropertyImage'
import PropertyDescription from '../components/PropertyDescription'
import FavouriteButton from '../components/FavouriteButton'


export default PropertyCard = ({item}) => {
  return (
  <TouchableOpacity>
    <View style={styles.container}>
      <PropertyImage item={item}/>
      <PropertyDescription item={item}/>
      <FavouriteButton/>
    </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FDFF',
    borderRadius: 15,
    padding: 18, 
    marginVertical: 8,
    marginHorizontal: 14
  },
})