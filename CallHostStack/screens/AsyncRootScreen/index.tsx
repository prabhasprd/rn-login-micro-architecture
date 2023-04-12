import {SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import BindingMicroApplication from '../../micro_services/common_component';
import {AsyncStorageMicroApp} from '../../micro_services';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncRootScreen = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [value, setValue] = useState<any>({
    isavailable: false,
    data: {},
  });
  const [rootText, setRootText] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLogin(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const retriveData = async () => {
    let user: any = await AsyncStorage.getItem('userDetails');
    let parsed = JSON.parse(user);
    setValue({isavailable: true, data: parsed});
  };

  const clearStore = async () => {
    await AsyncStorage.clear();
    setValue({isAvailable: false, value: ''});
  };

  const storeData = async () => {
    if (rootText.length > 0) {
      const value = {
        name: rootText,
      };
      await AsyncStorage.setItem('userDetails', JSON.stringify(value));
      setRootText('');
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#D14D72',
        alignSelf: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
      <Text>{`Root Application => Root Async Screen`} </Text>
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          width: '95%',
          borderRadius: 4,
        }}
        onChangeText={setRootText}
        value={rootText}
      />

      <TouchableOpacity
        disabled={rootText.length > 0 ? false : true}
        onPress={storeData}
        style={{
          width: '95%',
          height: 40,
          borderWidth: 1,
          borderColor: '#070A52',
          backgroundColor: rootText.length > 0 ? '#B9EDDD' : '#577D86',
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Store Data on Host Application</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={retriveData}
        style={{
          width: '95%',
          height: 40,
          borderWidth: 1,
          borderColor: '#c0c0c0',
          borderRadius: 4,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#c0c0c0',
        }}>
        <Text>Retrive Data from child on Host</Text>
      </TouchableOpacity>
      {value.isavailable && <Text>{JSON.stringify(value.data)}</Text>}
      <TouchableOpacity
        onPress={clearStore}
        style={{
          width: '95%',
          height: 40,
          borderWidth: 1,
          borderColor: '#c0c0c0',
          borderRadius: 4,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#c0c0c0',
        }}>
        <Text>Clear store on Host</Text>
      </TouchableOpacity>
      {isLogin && (
        <BindingMicroApplication
          LoadingContent={'Loading async ...'}
          children={<AsyncStorageMicroApp />}
        />
      )}
    </SafeAreaView>
  );
};

export default AsyncRootScreen;
