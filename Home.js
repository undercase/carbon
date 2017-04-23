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

import styles from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(1),
      transitioningTo: 0
    };
  }
  componentDidMount() {
    Animated.timing(this.state.opacity, {
      toValue: this.state.transitioningTo,
      easing: Easing.ease,
      duration: 1000
    }).start();
    this.setState({interval: setInterval(() => {
      if (this.state.transitioningTo == 1) {
        this.setState({transitioningTo: 0});
        Animated.timing(this.state.opacity, {
          toValue: this.state.transitioningTo,
          easing: Easing.ease,
          duration: 1000
        }).start();
      } else {
        this.setState({transitioningTo: 1});
        Animated.timing(this.state.opacity, {
          toValue: this.state.transitioningTo,
          easing: Easing.ease,
          duration: 1000
        }).start();
      }
    }, 1000)});
  }
  render() {
    return (
      <TouchableHighlight onPress={() => {
        clearInterval(this.state.interval);
        this.props.switchScreen('main');
      }}>
        <Image source={require('./img/pattern.png')} style={styles.backgroundImage}>
          <Text style={styles.logo}>carbon</Text>
          <Animated.View style={{opacity: this.state.opacity}}>
            <Text style={styles.tap}>TAP TO GET STARTED</Text>
          </Animated.View>
        </Image>
      </TouchableHighlight>
    );
  }
}
