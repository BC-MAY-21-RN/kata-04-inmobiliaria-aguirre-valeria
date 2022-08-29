import React from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


export default PropertyCard = ( {item} ) => {
  return (
  <TouchableOpacity>
    <View style={styles.container}>
      <Image source={{uri: item.image}} alt={item.title} style={styles.image}></Image>
      <View>
        <Text style={styles.title}>{item.property}</Text>
        <View style={styles.containerRow}>
          <FontAwesomeIcon icon='fa-location-dot' style={styles.icon}/>
          <Text style={styles.address}>{item.address}</Text>
        </View>
        <View style={styles.containerRow}>
          <FontAwesomeIcon icon='fa-bed' style={styles.icon}/>
          <Text style={styles.number}>{item.bedrooms}</Text>
          <FontAwesomeIcon icon='fa-toilet' style={styles.icon}/>
          <Text style={styles.number}>{item.bathrooms}</Text>
          <FontAwesomeIcon icon='fa-ruler-combined' style={styles.icon}/>
          <Text style={styles.number}>{item.size}</Text>
        </View>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <View>
        
      </View>
    </View>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FDFF',
    borderRadius: 15,
    padding: 18, 
    marginVertical: 8,
    marginHorizontal: 12
  },
  containerRow: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    marginBottom: 6
  },
  address: {
    marginLeft: 4,
    marginBottom: 8
  },
  image: {
    resizeMode: 'cover',
    width: 110,
    height: 115,
    borderRadius: 10,
    marginRight: 14
  },
  number: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 28,
    marginLeft: 10
  },
  icon: {
    color: '#4B4B4B'
  },
  price: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 20,
    marginTop: 6
  }

});