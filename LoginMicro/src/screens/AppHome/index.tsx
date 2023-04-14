import {SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const AppHome = (props: any) => {
  const {navigation} = props;
  const onHandleNavigate = (value: any): void => {
    navigation.navigate(value);
  };

  return (
    <SafeAreaView>
      <Text style={styles.introTextStyle}>Micro Application</Text>
      <Text style={styles.introTextStyle}>Host Application Navigate</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          onHandleNavigate('ItemList');
        }}>
        <Text style={styles.buttonTextStyle}>Host Application Menu List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          onHandleNavigate('AsyncScreenMicroApp');
        }}>
        <Text style={styles.buttonTextStyle}>
          Micro Application Async store
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          onHandleNavigate('ReduxConfig');
        }}>
        <Text style={styles.buttonTextStyle}>{`Redux Test Screen`}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          onHandleNavigate('PassingProps');
        }}>
        <Text style={styles.buttonTextStyle}>{`Props Screen`}</Text>
      </TouchableOpacity>
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
});
