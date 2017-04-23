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
  Image,
  View,
  Animated,
  Easing
} from 'react-native';

import Home from './Home';

import styles from './styles';

export default class carbon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screens: {
        home: <Home switchScreen={this.handleScreen}/>,
        main: <Text>Hello world</Text>
      },
      currentScreen: 'home'
    };
  }
  handleScreen = (screen) => {
    this.setState({currentScreen: screen});
  }
  render() {
    let screen = this.state.screens[this.state.currentScreen];
    return (
      <View style={styles.container}>
        {screen}
      </View>
    );
  }
}

AppRegistry.registerComponent('carbon', () => carbon);
