import { StyleSheet, View } from 'react-native';
import React from 'react';

const Container = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#232323',
    flex: 1,
    justifyContent: 'center',
  },
});

export default Container;
