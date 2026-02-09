import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Toolbar() {
  return (
    <View style={styles.toolbar}>
      <TouchableOpacity style={styles.button}>
        <Icon name="home-outline" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="search-outline" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="add-circle-outline" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="person-outline" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    height: 60,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
});
