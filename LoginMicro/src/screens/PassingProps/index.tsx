import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const PassingProps = (props: any) => {
  const {navigation, route} = props;
  const {params} = route;
  const [userPropsData, setUserPropsData] = useState<any>('');
  const onHandleChangeText = (e: any) => {
    setUserPropsData(e);
  };
  return (
    <SafeAreaView>
      <Text
        style={
          styles.introTextStyle
        }>{`Value comes from Host app to micro`}</Text>
      <Text style={styles.introTextStyle}>{params.userPropsData}</Text>

      <Text style={styles.introTextStyle}>
        Passing Props functionality to Micro App screen
      </Text>

      <TextInput
        style={styles.inputTextStyle}
        onChangeText={onHandleChangeText}
        value={userPropsData}
        placeholder={`Enter Any value`}
        placeholderTextColor={'black'}
      />
      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate('Host App', {
            screen: 'HomeScreen',
            params: {userPropsData},
          });
        }}>
        <Text style={styles.buttonTextStyle}>Pass to Host</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('AppHome')}>
        <Text style={styles.introTextStyle}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PassingProps;

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
