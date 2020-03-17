import { StyleSheet, Switch, Text, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';

const SwitchOption = ({ label, onChange, value }) => {
  return (
    <View style={styles.container}>
      <Switch
        ios_backgroundColor={colors.statusBarColor}
        onValueChange={onChange}
        thumbColor={colors.primary}
        trackColor={{
          false: colors.statusBarColor,
          true: colors.primaryOff,
        }}
        value={value}
      ></Switch>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', flexDirection: 'row', marginVertical: 10, justifyContent: 'flex-start' },
  label: { color: colors.lightGrey, fontSize: 17, marginLeft: 10 },
});

export default SwitchOption;
