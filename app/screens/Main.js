import Container from '../components/Container';
import CopyToClipboardButton from '../components/CopyToClipboardButton';
import React from 'react';
import { StatusBar } from 'react-native';
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

      <CopyToClipboardButton></CopyToClipboardButton>
    </Container>
  );
};

export default Main;
