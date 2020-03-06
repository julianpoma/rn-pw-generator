import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Greetings = ({ name }) => <Text>Greetings {name}</Text>;

export default function App() {
  return (
    <View style={styles.container}>
      <Greetings name="Julian"></Greetings>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
