import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {updateUserDatails} from '../../appconfig/redux/action';
import HomeScreens from '../HomeScreen';

interface ProfileUserDetails {
  name: string;
  phone: string;
}

const ProfileScreens = (props: any) => {
  const {navigation} = props;
  const MinorAppData = useSelector((state: any) => state.userReducerMinor);
  const [profileUserDetails, setProfileUserDetails] =
    useState<ProfileUserDetails>({
      name: '',
      phone: '',
    });
  const dispatch = useDispatch();
  const onHandleChangeText = (e: any, value: any): void => {
    setProfileUserDetails({...profileUserDetails, [value]: e});
  };

  const onHandleStoreData = () => {
    dispatch(updateUserDatails(profileUserDetails));
    setProfileUserDetails({
      name: '',
      phone: '',
    });
  };
  return (
    <SafeAreaView style={styles.rootScreen}>
      <Text>ProfileScreens</Text>
      <TextInput
        style={styles.inputTextStyle}
        onChangeText={e => {
          onHandleChangeText(e, 'name');
        }}
        placeholder={'enter name'}
        placeholderTextColor={'black'}
        value={profileUserDetails.name}
      />
      <TextInput
        style={styles.inputTextStyle}
        onChangeText={e => {
          onHandleChangeText(e, 'phone');
        }}
        value={profileUserDetails.phone}
        placeholder={'enter phone'}
        placeholderTextColor={'black'}
      />
      <Text>
        {`MinorAppData ->>>>`}
        {JSON.stringify(MinorAppData[0])}
      </Text>
      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.switchButtonStyle}
        onPress={() => {
          navigation.navigate('HomeScreen', {screen: 'ItemList'});
        }}>
        <Text style={styles.buttonTextStyle}>Back to Home Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.buttonStyle}
        onPress={onHandleStoreData}>
        <Text style={styles.buttonTextStyle}>Store on redux</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreens;
