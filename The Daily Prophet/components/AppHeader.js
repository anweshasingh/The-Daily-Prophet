import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}> The Daily Prophet </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 40
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

