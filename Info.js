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

export default class Info extends Component {
  render() {
    return (
      <View>
        <Image source={this.props.image[0]} style={styles.info}/>
      </View>
      <View>
        <Text>{this.props.name}</Text>
        <Text>{this.props.carbon_rating}</Text>
        <Text>{this.props.}</Text>
      </View>
      <View>
        <Image source=(this.props.recommend[1])/>
        <Image source=(this.props.recommend[2])/>
        <Image source=(this.props.recommend[3])/>
      </View>
    );
  }
}
