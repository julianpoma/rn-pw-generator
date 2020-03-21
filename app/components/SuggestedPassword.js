import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';

const SuggestedPassword = ({ password }) => {
  const labelStyle = StyleSheet.create({
    label: {
      color: password.color,
      fontWeight: '700',
    },
  });

  return (
    <>
      <View style={styles.box}>
        <Text style={styles.password}>{password.password}</Text>
      </View>
      <View>
        <Text style={styles.entropy}>
          Your password is{' '}
          <Text style={labelStyle.label}>{password.label}</Text> (
          {password.bits} bits)
        </Text>
      </View>
    </>
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
  entropy: {
    color: colors.lightGrey,
    marginTop: 7,
  },
  password: {
    color: colors.lightGrey,
    flexShrink: 1,
    fontSize: 26,
    textAlign: 'center',
  },
});

export default SuggestedPassword;
