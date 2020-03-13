import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../config/colors';

const PrimaryButton = ({ action, text }) => {
  return (
    <TouchableOpacity style={styles.touchable} onPress={action}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.lightGrey,
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: 'center',
  },
  touchable: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    margin: 20,
    paddingHorizontal: 15,
    paddingVertical: 4,
  },
});

export default PrimaryButton;
