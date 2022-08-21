import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


const Card = () => {
  return (
  <View>
    <Text style={styles.title}>Título</Text>
    <View></View>
    <FontAwesomeIcon icon='fa-location-dot'/>
    <Text style={styles.location}>Location</Text>
    <View style={styles.container}>
      <FontAwesomeIcon icon='fa-bed'/>
      <Text>3</Text>
      <FontAwesomeIcon icon='fa-toilet'/>
      <Text>4</Text>
      <FontAwesomeIcon icon='fa-ruler-combined'/>
      <Text>200</Text>
    </View>
    <Text>$400/m</Text>
  </View>
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

export default Card;