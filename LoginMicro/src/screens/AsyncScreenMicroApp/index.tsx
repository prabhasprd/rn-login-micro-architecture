import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncScreenMicroApp = (props: any) => {
  const {navigation, isHost} = props;
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
        flex: 1,
      }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
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
            width: '95%',
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
            width: '95%',
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
        {asyncData.isAvailable && (
          <Text>{JSON.stringify(asyncData.value)}</Text>
        )}
        <View style={styles.flexButton}>
          <TouchableOpacity
            style={[styles.buttonStyle, {width: isHost ? '45%' : '100%'}]}
            onPress={() => {
              navigation.navigate('AppHome');
            }}>
            <Text style={styles.buttonTextStyle}>Back to Home menu</Text>
          </TouchableOpacity>
          {isHost && (
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate('ItemList')}>
              <Text style={styles.introTextStyle}>Back to Host App</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AsyncScreenMicroApp;

const styles = StyleSheet.create({
  flexButton: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
  },
  buttonStyle: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    alignSelf: 'center',
    marginTop: 20,
  },
  introTextStyle: {
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
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
