import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const HomeScreen = (props: any) => {
  const {navigation, route} = props;
  const {params} = route;
  const [userPropsData, setUserPropsData] = useState<any>('');

  const onHandleChangeText = (e: any) => {
    setUserPropsData(e);
  };

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
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
          navigation.navigate('Micro App', {
            screen: 'PassingProps',
            params: {userPropsData},
          });
        }}>
        <Text style={styles.buttonTextStyle}>Pass to Child</Text>
      </TouchableOpacity>

      {Boolean(params) && Object.values(params).length > 0 && (
        <View>
          <Text style={styles.introTextStyle}>
            value comes from Child to host
          </Text>
          <Text style={styles.introTextStyle}>{params.userPropsData}</Text>
        </View>
      )}
      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate('ItemList');
        }}>
        <Text style={styles.buttonTextStyle}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
