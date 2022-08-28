import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default PropertyCard = ( {item} ) => {
  return (
  <TouchableOpacity>
    <Text style={styles.title}>{item.property}</Text>
    <View></View>
    <FontAwesomeIcon icon='fa-location-dot'/>
    <Text style={styles.location}>{item.address}</Text>
    <View style={styles.container}>
      <FontAwesomeIcon icon='fa-bed'/>
      <Text>{item.bedrooms}</Text>
      <FontAwesomeIcon icon='fa-toilet'/>
      <Text>{item.bathrooms}</Text>
      <FontAwesomeIcon icon='fa-ruler-combined'/>
      <Text>{item.size}</Text>
    </View>
    <Text>{item.price}</Text>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontWeight: "bold"
  },
  location: {
    fontWeight: "bold"
  }

});