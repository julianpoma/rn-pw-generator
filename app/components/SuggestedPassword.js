import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';
import { generatePassword } from '../services/password-generator';

// eslint-disable-next-line no-unused-vars
const SuggestedPassword = ({ length, upperCase, numbers, special, refresh }) => {
  const password = generatePassword(length, upperCase, numbers, special);

  return (
    <View style={styles.box}>
      <Text style={styles.password}>{password}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderColor: colors.primary,
    borderRadius: 10,
    borderWidth: 2,
    padding: 15,
    width: '90%',
  },
  password: {
    color: colors.lightGrey,
    flexShrink: 1,
    fontSize: 26,
    textAlign: 'center',
  },
});

export default SuggestedPassword;
