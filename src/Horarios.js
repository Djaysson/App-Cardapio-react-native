import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class Horario extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Em breve</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e35339',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default Horario;
