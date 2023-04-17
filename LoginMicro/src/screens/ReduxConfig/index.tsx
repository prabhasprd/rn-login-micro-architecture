import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

const ReduxConfig = (props: any) => {
  const {store, navigation, minorUpdateUserDatails, isHost} = props;

  const hostAppData = useSelector((state: any) => state?.userReducer) || [];
  const [userDetails, setUserDetails] = useState<string>('');

  const onHandleChangeText = (e: any) => {
    setUserDetails(e);
  };

  const onStoreDetails = () => {
    store.dispatch(minorUpdateUserDatails(userDetails));
    setUserDetails('');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          backgroundColor: '#A084DC',
        }}>
        <Text style={styles.introTextStyle}>RetriveReduxData on Child</Text>
        <Text>{JSON.stringify(hostAppData[0])}</Text>

        <TextInput
          style={styles.inputTextStyle}
          onChangeText={onHandleChangeText}
          value={userDetails}
          placeholder={`Enter Any name to store on host app redux`}
          placeholderTextColor={'#000'}
        />
        {isHost && (
          <TouchableOpacity
            style={styles.singleButtonStyle}
            onPress={onStoreDetails}>
            <Text style={styles.buttonTextStyle}>Store</Text>
          </TouchableOpacity>
        )}
        <View style={styles.bottomContainerStyle}>
          {isHost && (
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate('ItemList')}>
              <Text style={styles.introTextStyle}>Back to Host App</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={[styles.buttonStyle, {width: isHost ? '45%' : '100%'}]}
            onPress={() => navigation.navigate('AppHome')}>
            <Text style={styles.introTextStyle}>Back to Minor App</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReduxConfig;

const styles = StyleSheet.create({
  bottomContainerStyle: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
  },
  singleButtonStyle: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '95%',
  },
  buttonStyle: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  introTextStyle: {
    fontSize: 20,
    textAlign: 'center',
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
