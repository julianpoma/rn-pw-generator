import { Alert, Slider, StatusBar, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '../components/Buttons';
import Container from '../components/Container';
import SuggestedPassword from '../components/SuggestedPassword';
import SwitchOption from '../components/SwitchOption';
import colors from '../config/colors';
import { generatePassword } from '../services/password-generator';

const Main = () => {
  const [password, setPassword] = useState({});

  const [passwordLength, setPasswordLength] = useState(8);
  const [withUpperCase, setWithUpperCase] = useState(false);
  const [withNumbers, setwithNumbers] = useState(false);
  const [withSpecialChars, setwithSpecialChars] = useState(false);

  useEffect(() => {
    setPassword(
      generatePassword(
        passwordLength,
        withUpperCase,
        withNumbers,
        withSpecialChars,
      ),
    );
  }, [passwordLength, withUpperCase, withNumbers, withSpecialChars]);

  return (
    <Container>
      <StatusBar
        translucent={false}
        barStyle="light-content"
        backgroundColor={colors.statusBarColor}
      />

      <SuggestedPassword password={password}></SuggestedPassword>

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

      <View style={styles.switchGroup}>
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

      <View style={styles.buttonGroup}>
        <Button.Secondary
          action={() =>
            setPassword(
              generatePassword(
                passwordLength,
                withUpperCase,
                withNumbers,
                withSpecialChars,
              ),
            )
          }
          text="Refresh"
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
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  slider: {
    height: 50,
    marginVertical: 10,
    width: '75%',
  },
  switchGroup: { justifyContent: 'flex-start' },
});

export default Main;
