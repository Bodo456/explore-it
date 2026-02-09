import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import Toolbar from './Toolbar';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content} />
      <Toolbar />
    </View>
  );
}

