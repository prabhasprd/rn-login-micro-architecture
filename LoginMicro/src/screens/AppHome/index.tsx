import {
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect} from 'react';
import Axios from 'axios';

const AppHome = (props: any) => {
  const {navigation, isHost} = props;
  const onHandleNavigate = (value: any): void => {
    navigation.navigate(value);
  };

  // useEffect(() => {
  //   (async () => {
  //     const users = await apiCall();
  //   })();
  // }, []);

  // const apiCall = () => {
  //   Axios.get('https://fakestoreapi.com/products/1')
  //     .then(res => console.log('json ===><>>>>', res))
  //     .catch(err => {
  //       console.log('error =>', err);
  //     });
  // };

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
          }>{`Micro Application Screen Menus Compel`}</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            onHandleNavigate('PassingProps');
          }}>
          <Text
            style={
              styles.buttonTextStyle
            }>{`Micro Application Props Screen`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            onHandleNavigate('AsyncScreenMicroApp');
          }}>
          <Text style={styles.buttonTextStyle}>
            {`Micro Application Async store`}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            onHandleNavigate('ReduxConfig');
          }}>
          <Text
            style={styles.buttonTextStyle}>{`Micro Application Redux`}</Text>
        </TouchableOpacity>
        {isHost && (
          <TouchableOpacity
            style={styles.buttonStyle1}
            onPress={() => {
              onHandleNavigate('ItemList');
            }}>
            <Text style={styles.buttonTextStyle}>{`Swith to Host App`}</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppHome;

const styles = StyleSheet.create({
  introTextStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  buttonTextStyle: {
    textTransform: 'uppercase',
    fontSize: 16,
  },
  buttonStyle: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonStyle1: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
    bottom: 0,
    position: 'absolute',
  },
});
