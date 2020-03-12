import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SuggestedPassword = ({ password }) => (
  <View style={styles.box}>
    <Text style={styles.password}>{password}</Text>
  </View>
);

const styles = StyleSheet.create({
  box: {
    borderColor: '#fff',
    borderWidth: 2,
    flexDirection: 'row',
    margin: 20,
    padding: 15,
  },
  password: {
    color: '#efefef',
    flexShrink: 1,
    fontSize: 26,
    textAlign: 'center',
  },
});

export default SuggestedPassword;
