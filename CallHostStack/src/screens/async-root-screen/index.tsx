import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BindingMicroApplication from '../../../micro_services/common_component';
import {AsyncMicroApp} from '../../../micro_services';

const AsyncRootScreen = (props: any) => {
  const {navigation, route} = props;
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
      }}>
      <ScrollView
        contentContainerStyle={{
          width: '100%',
          alignItems: 'center',
        }}>
        <Text>{`Root Application => Root Async Screen`} </Text>
        <TextInput
          style={styles.textStyle}
          onChangeText={setRootText}
          value={rootText}
        />

        <TouchableOpacity
          disabled={rootText.length > 0 ? false : true}
          onPress={storeData}
          style={[
            styles.buttonStyle,
            {backgroundColor: rootText.length > 0 ? '#B9EDDD' : '#577D86'},
          ]}>
          <Text>Store Data on Host Application</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={retriveData}
          style={styles.secondButtonStyle}>
          <Text>Retrive Data from child on Host</Text>
        </TouchableOpacity>
        {value.isavailable && <Text>{JSON.stringify(value.data)}</Text>}
        <TouchableOpacity onPress={clearStore} style={styles.lastButtonStyle}>
          <Text>Clear store on Host</Text>
        </TouchableOpacity>
        {/* {isLogin && (
          <BindingMicroApplication
            LoadingContent={'Loading async ...'}
            children={<AsyncMicroApp />}
          />
        )} */}
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.buttonStyle}
          onPress={() => {
            navigation.navigate('ItemList');
          }}>
          <Text style={{}}>Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AsyncRootScreen;

const styles = StyleSheet.create({
  buttonStyle: {
    width: '95%',
    height: 40,
    borderWidth: 1,
    borderColor: '#070A52',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '95%',
    borderRadius: 4,
  },
  secondButtonStyle: {
    width: '95%',
    height: 40,
    borderWidth: 1,
    borderColor: '#c0c0c0',
    borderRadius: 4,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0c0c0',
  },
  lastButtonStyle: {
    width: '95%',
    height: 40,
    borderWidth: 1,
    borderColor: '#c0c0c0',
    borderRadius: 4,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0c0c0',
  },
});
