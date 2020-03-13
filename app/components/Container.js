import { StyleSheet, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';

const Container = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
  },
});

export default Container;
