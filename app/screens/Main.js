import {
  Alert,
  StatusBar,
  Slider,
  StyleSheet,
  Text,
  View,
  Switch,
} from 'react-native';
import Container from '../components/Container';
import PrimaryButton from '../components/PrimaryButton';
import React, { useState } from 'react';
import SuggestedPassword from '../components/SuggestedPassword';
import colors from '../config/colors';

const Main = () => {
  const [passwordLength, setPasswordLength] = useState(8);
  const [withUpperCase, setWithUpperCase] = useState(false);

  return (
    <Container>
      <StatusBar
        translucent={false}
        barStyle="light-content"
        backgroundColor={colors.statusBarColor}
      />

      <SuggestedPassword
        length={passwordLength}
        upperCase={withUpperCase}
      ></SuggestedPassword>

      <Slider
        style={styles.slider}
        minimumValue={8}
        maximumValue={64}
        value={passwordLength}
        maximumTrackTintColor="transparent"
        minimumTrackTintColor={colors.primary}
        thumbTintColor={colors.lightGrey}
        step={1}
        animateTransitions={true}
        onValueChange={value => setPasswordLength(value)}
      />

      <View style={{ alignItems: 'center', flexDirection: 'row' }}>
        <Switch
          ios_backgroundColor={colors.statusBarColor}
          onValueChange={value => setWithUpperCase(value)}
          thumbColor={colors.primary}
          trackColor={{
            false: colors.statusBarColor,
            true: colors.primaryDark,
          }}
          value={withUpperCase}
        ></Switch>
        <Text style={{ color: colors.lightGrey, fontSize: 16, marginLeft: 5 }}>
          Upper case
        </Text>
      </View>

      <PrimaryButton
        action={() => Alert.alert('Copied!')}
        text="Copy to clipboard"
      ></PrimaryButton>
    </Container>
  );
};

const styles = StyleSheet.create({
  slider: {
    height: 50,
    marginVertical: 20,
    width: '75%',
  },
});

export default Main;
