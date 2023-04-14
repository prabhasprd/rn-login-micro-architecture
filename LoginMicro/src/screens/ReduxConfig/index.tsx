import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

const ReduxConfig = (props: any) => {
  const {store, navigation} = props;
  const hostAppData = useSelector((state: any) => state.userReducer);
  console.log('dskjfhgsdjkf ==>', store);

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: '#B2A4FF'}}>
      <Text>RetriveReduxData on Child</Text>
      <Text>{JSON.stringify(hostAppData[0])}</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('AppHome')}>
        <Text style={styles.introTextStyle}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ReduxConfig;

const styles = StyleSheet.create({
  buttonStyle: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
  },
  introTextStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
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
  buttonTextStyle: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
