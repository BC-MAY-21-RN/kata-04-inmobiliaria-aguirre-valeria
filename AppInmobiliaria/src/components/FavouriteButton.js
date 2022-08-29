import React from 'react'
import {View, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


export default FavouriteButton = () => {
  return (
      <View style={styles.containerHeart}>
        <FontAwesomeIcon icon='fa-heart' size={14} style={styles.iconHeart}/>
      </View>
  )
}

const styles = StyleSheet.create({
  containerHeart: {
    alignSelf: "flex-end",
    backgroundColor: '#00B074',
    borderRadius: 150 / 2,
    padding: 7,
    top: 8,
    left: -25,
  },
  iconHeart: {
    color: '#FFFFFF',
  }
})