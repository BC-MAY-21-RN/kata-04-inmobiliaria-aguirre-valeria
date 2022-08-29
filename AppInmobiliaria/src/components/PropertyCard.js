import React from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


export default PropertyCard = ( {item} ) => {
  return (
  <TouchableOpacity>
    <View style={styles.container}>
      <Image source={{uri: item.image}} alt={item.title} style={styles.image}></Image>
      <View style={styles.containerStar}>
      <FontAwesomeIcon icon='fa-star' size={12} style={styles.iconStar}/>
      <Text style={styles.points}>4.7</Text>
      </View>
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
      <View style={styles.containerHeart}>
        <FontAwesomeIcon icon='fa-heart' size={14} style={styles.iconHeart}/>
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
  },
  containerStar: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#FBEDB7',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    top: 105,
    left: 50,
  },
  iconStar: {
    color: '#EEBA00',
  },
  points: {
    marginLeft: 5,
    fontSize: 12,
    fontWeight: 'bold'
  },

  containerHeart: {
    alignSelf: "flex-end",
    backgroundColor: '#00B074',
    borderRadius: 150 / 2,
    padding: 7,
    top: 10,
    left: -20,
  },
  iconHeart: {
    color: '#FFFFFF',
  }

});