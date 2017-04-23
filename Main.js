import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Image,
  View,
  Animated,
  Easing,
  TouchableHighlight
} from 'react-native';
import Camera from 'react-native-camera';

import styles from './styles';

export default class Home extends Component {
  render() {
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.camera}
        aspect={Camera.constants.Aspect.fill}>
      </Camera>
    );
  }
}
