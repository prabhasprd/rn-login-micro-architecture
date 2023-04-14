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
      <ScrollView contentContainerStyle={{width: '100%', alignItems: 'center'}}>
        <Text>Host screen</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => onHandleNavigateTOScreen('HomeScreen')}>
          <Text>{`Passing Props to Micro App screen`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => onHandleNavigateTOScreen('AsyncRootScreen')}>
          <Text>{`Async store Test Screen`}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => onHandleNavigateTOScreen('ProfileScreens')}>
          <Text>{`Redux Test Screen`}</Text>
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
});
