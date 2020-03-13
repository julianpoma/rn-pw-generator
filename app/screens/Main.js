import { Alert, StatusBar } from 'react-native';
import Container from '../components/Container';
import PrimaryButton from '../components/PrimaryButton';
import React from 'react';
import SuggestedPassword from '../components/SuggestedPassword';
import colors from '../config/colors';
import { generatePassword } from '../services/password-generator';

const Main = () => {
  const password = generatePassword();

  return (
    <Container>
      <StatusBar
        translucent={false}
        barStyle="light-content"
        backgroundColor={colors.statusBarColor}
      />
      <SuggestedPassword password={password}></SuggestedPassword>

      <PrimaryButton
        action={() => Alert.alert('Copied!')}
        text="Copy to clipboard"
      ></PrimaryButton>
    </Container>
  );
};

export default Main;
