import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import colors from '../../config/colors';

const Secondary = ({ action, text }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={action}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  text: {
    color: colors.primary,
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 15,
    textAlign: 'center',
  },
  touchable: {
    borderColor: colors.primary,
    borderRadius: 10,
    borderWidth: 2,
  },
});

export default Secondary;
