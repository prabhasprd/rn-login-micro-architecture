import {StyleSheet, Dimensions} from 'react-native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: '#F2E3DB',
    height,
    width,
    alignItems: 'center',
  },
  inputTextStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#c0c0c0',
    borderRadius: 5,
    width: '95%',
  },
  buttonStyle: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    alignSelf: 'center',
  },
  buttonTextStyle: {
    textTransform: 'uppercase',
    fontSize: 16,
  },
  switchButtonStyle: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    alignSelf: 'center',
  },
});
export default styles;
