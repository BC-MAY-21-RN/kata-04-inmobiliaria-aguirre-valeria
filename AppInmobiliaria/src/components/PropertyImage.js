import React from 'react'
import {View, Image, Text, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


export default PropertyImage = ( {item} ) => {
  return (
    <View>
      <Image source={{uri: item.image}} alt={item.title} style={styles.image}></Image>
      <View style={styles.containerStar}>
        <FontAwesomeIcon icon='fa-star' size={12} style={styles.iconStar}/>
        <Text style={styles.points}>{item.rating}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: 110,
    height: 115,
    borderRadius: 10,
    marginRight: 14
  },
  containerStar: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#FBEDB7',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    top: 86,
    left: 30,
  },
  iconStar: {
    color: '#EEBA00',
  },
  points: {
    marginLeft: 5,
    fontSize: 12,
    fontWeight: 'bold'
  },
})