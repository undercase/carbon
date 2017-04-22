/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

import styles from './styles';

export default class carbon extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

AppRegistry.registerComponent('carbon', () => carbon);
