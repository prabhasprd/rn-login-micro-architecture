import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

const ItemListScreen = (props: any) => {
  const {navigation} = props;

  const onHandleNavigateTOScreen = (name: any) => {
    navigation.navigate(name);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          width: '100%',
          alignItems: 'center',
          flexGrow: 1,
        }}>
        <Text style={styles.introTextStyle}>{`Host App screen menus`}</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => onHandleNavigateTOScreen('HomeScreen')}>
          <Text>{`Pass Data to Micro App as Props`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => onHandleNavigateTOScreen('ProfileScreens')}>
          <Text>{`Store data on Redux`}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => onHandleNavigateTOScreen('AsyncRootScreen')}>
          <Text>{`Store Data on Async store`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle1}
          onPress={() => onHandleNavigateTOScreen('MinorApp')}>
          <Text>{`Switch to Micro App`}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemListScreen;

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
  buttonStyle1: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
    position: 'absolute',
    bottom: 0,
  },
  introTextStyle: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    textTransform: 'capitalize',
  },
});
