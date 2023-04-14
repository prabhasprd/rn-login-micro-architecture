import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ItemListScreen from '../../screens/item-list-screen';
import HomeScreen from '../../screens/HomeScreen';
import AsyncRootScreen from '../../screens/async-root-screen';
import 'react-native-gesture-handler';
import * as React from 'react';
import ProfileScreens from '../../screens/ProfileScreens';

export const Stack = createNativeStackNavigator();

const CustomStackNaviagtor = () => {
  return (
    <Stack.Navigator
      initialRouteName="ItemList"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ItemList" component={ItemListScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AsyncRootScreen" component={AsyncRootScreen} />
      <Stack.Screen name="ProfileScreens" component={ProfileScreens} />
    </Stack.Navigator>
  );
};

export default CustomStackNaviagtor;
