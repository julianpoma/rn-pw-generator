import Container from '../components/Container';
import React from 'react';
import { StatusBar } from 'react-native';
import SuggestedPassword from '../components/SuggestedPassword';
import colors from '../config/colors';

const Main = () => {
  const password = '&SUNpOLdgzooU@Q3&DM!&SUNpOLdgzooU@Q3&DM!&SUNpOLdgzooU@Q3&DM!&SUNpOLdgzooU@Q3&DM!';

  return (
    <Container>
      <StatusBar
        translucent={false}
        barStyle="light-content"
        backgroundColor={colors.statusBarColor}
      />
      <SuggestedPassword password={password}></SuggestedPassword>
    </Container>
  );
};

export default Main;
