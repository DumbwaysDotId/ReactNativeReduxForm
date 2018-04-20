import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextEllipse from 'react-native-redux-form';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <TextEllipse>Shake your phone to open the developer menu.</TextEllipse>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
