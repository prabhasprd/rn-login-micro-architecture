import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncScreenMicroApp = (props: any) => {
  const {navigation} = props;
  const [asyncData, setAsyncData] = useState<any>({
    isAvailable: false,
    value: '',
  });
  const [text, setText] = useState<string>('');

  const storeData = async () => {
    if (text.length > 0) {
      const value = {
        name: text,
      };
      await AsyncStorage.setItem('userDetails', JSON.stringify(value));
      setText('');
    }
  };

  const retriveData = async () => {
    let user: any = await AsyncStorage.getItem('userDetails');
    let parsed = JSON.parse(user);
    setAsyncData({isAvailable: true, value: parsed});
  };

  const clearStore = async () => {
    await AsyncStorage.clear();
    setAsyncData({isAvailable: false, value: ''});
  };

  return (
    <SafeAreaView
      style={{
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c0c0c0',
        marginTop: 50,
        borderRadius: 5,
      }}>
      <Text>{`AsyncStorageScreen Micro App`}</Text>
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          width: '95%',
          borderRadius: 4,
        }}
        onChangeText={setText}
        value={text}
      />
      <TouchableOpacity
        disabled={text.length > 0 ? false : true}
        onPress={storeData}
        style={{
          width: '95%',
          height: 40,
          borderWidth: 1,
          borderColor: '#070A52',
          backgroundColor: text.length > 0 ? '#B9EDDD' : '#577D86',
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Store Data on Async</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={retriveData}
        style={{
          width: '100%',
          height: 40,
          borderWidth: 1,
          borderColor: '#070A52',
          borderRadius: 4,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Retrive Data from Async</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={clearStore}
        style={{
          width: '100%',
          height: 40,
          borderWidth: 1,
          borderColor: '#070A52',
          borderRadius: 4,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Clear Async Storee</Text>
      </TouchableOpacity>
      {asyncData.isAvailable && <Text>{JSON.stringify(asyncData.value)}</Text>}

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('AppHome')}>
        <Text style={styles.introTextStyle}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AsyncScreenMicroApp;

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
