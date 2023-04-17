import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const PassingProps = (props: any) => {
  const {navigation, route, isHost} = props;
  const {params} = route;
  const [userPropsData, setUserPropsData] = useState<any>('');
  const onHandleChangeText = (e: any) => {
    setUserPropsData(e);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          width: '100%',
          alignItems: 'center',
          flexGrow: 1,
        }}>
        <Text
          style={
            styles.introTextStyle
          }>{`Micro Application Props screen`}</Text>
        {Boolean(params) && Object.values(params).length > 0 && (
          <View>
            <Text style={styles.introTextStyle}>
              {`value comes from Child to host`}
            </Text>
            <Text style={styles.introTextStyle}>{params.userPropsData}</Text>
          </View>
        )}
        <Text style={styles.introTextStyle}>
          Passing Props functionality to Micro App screen
        </Text>

        <TextInput
          style={styles.inputTextStyle}
          onChangeText={onHandleChangeText}
          value={userPropsData}
          placeholder={`Enter Any value`}
          placeholderTextColor={'gray'}
        />
        {isHost && (
          <TouchableOpacity
            activeOpacity={0.4}
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate('HomeScreen', {userPropsData});
              setUserPropsData('');
            }}>
            <Text style={styles.buttonTextStyle}>Pass to Host App</Text>
          </TouchableOpacity>
        )}

        <View style={styles.flexButton}>
          <TouchableOpacity
            style={[styles.subButtonStyle, {width: isHost ? '45%' : '100%'}]}
            onPress={() => {
              navigation.navigate('AppHome');
              setUserPropsData('');
            }}>
            <Text style={styles.buttonTextStyle}>Back to Home menu</Text>
          </TouchableOpacity>
          {isHost && (
            <TouchableOpacity
              style={styles.subButtonStyle}
              onPress={() => {
                navigation.navigate('MinorApp', {screen: 'AppHome'});
                setUserPropsData('');
              }}>
              <Text style={styles.buttonTextStyle}>Back to Micro menu</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
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
  subButtonStyle: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    alignSelf: 'center',
    marginTop: 20,
  },
  flexButton: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
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
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
