import { StyleSheet, Text } from 'react-native';
import React from 'react';

const SuggestedPassword = ({ password }) => (
  <Text style={styles.password}>{password}</Text>
);

const styles = StyleSheet.create({
  password: {
    color: '#efefef',
    fontSize: 26,
  },
});

export default SuggestedPassword;
