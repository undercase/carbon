import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    fontFamily: 'Roboto-Light',
    color: '#ffffff',
    fontSize: 100
  },
  backgroundImage: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tap: {
    color: "#ffffff",
    fontFamily: 'Roboto-Light',
    fontSize: 20
  },
  camera: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  info: {
    margin: 0,
    padding: auto
  }
});

export default styles;
