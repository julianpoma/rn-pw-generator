import { Alert, Slider, StatusBar, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Button from '../components/Buttons';
import Container from '../components/Container';
import SuggestedPassword from '../components/SuggestedPassword';
import SwitchOption from '../components/SwitchOption';
import colors from '../config/colors';

const Main = () => {
  const [forceRefresh, setForceRefrest] = useState(false);
  const [passwordLength, setPasswordLength] = useState(8);
  const [withUpperCase, setWithUpperCase] = useState(false);
  const [withNumbers, setwithNumbers] = useState(false);
  const [withSpecialChars, setwithSpecialChars] = useState(false);

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
        numbers={withNumbers}
        special={withSpecialChars}
        refresh={forceRefresh}
      ></SuggestedPassword>

      <Slider
        style={styles.slider}
        minimumValue={8}
        maximumValue={64}
        value={passwordLength}
        maximumTrackTintColor={colors.primaryOff}
        minimumTrackTintColor={colors.primary}
        thumbTintColor={colors.lightGrey}
        step={1}
        animateTransitions={true}
        onValueChange={value => setPasswordLength(value)}
      />

      <View style={{ justifyContent: 'flex-start' }}>
        <SwitchOption
          label="Upper case"
          onChange={value => setWithUpperCase(value)}
          value={withUpperCase}
        ></SwitchOption>

        <SwitchOption
          label="Numbers"
          onChange={value => setwithNumbers(value)}
          value={withNumbers}
        ></SwitchOption>

        <SwitchOption
          label="Special characters"
          onChange={value => setwithSpecialChars(value)}
          value={withSpecialChars}
        ></SwitchOption>
      </View>

      <View
        style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}
      >
        <Button.Secondary
          action={() => setForceRefrest(!forceRefresh)}
          text="Reset"
        ></Button.Secondary>

        <Button.Primary
          action={() => Alert.alert('Copied!')}
          text="Copy to clipboard"
        ></Button.Primary>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  slider: {
    height: 50,
    marginVertical: 10,
    width: '75%',
  },
});

export default Main;
