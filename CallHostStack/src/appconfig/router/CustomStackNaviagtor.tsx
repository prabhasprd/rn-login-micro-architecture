import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ItemListScreen from '../../screens/item-list-screen';
import HomeScreen from '../../screens/HomeScreen';
import AsyncRootScreen from '../../screens/async-root-screen';
import 'react-native-gesture-handler';
import * as React from 'react';
import ProfileScreens from '../../screens/ProfileScreens';
import {Text} from 'react-native';
import store from '../redux/store';
import {MicroAppLogin} from '../../../micro_services';
import {minorUpdateUserDatails} from '../redux/action';

export const Stack = createNativeStackNavigator();

export const MicroStackApplication = () => {
  return (
    <React.Suspense fallback={<Text>{'loading App ...'}</Text>}>
      <MicroAppLogin
        store={store}
        Stack={Stack}
        isHost={true}
        minorUpdateUserDatails={minorUpdateUserDatails}
      />
    </React.Suspense>
  );
};

const CustomStackNaviagtor = () => {
  return (
    <Stack.Navigator
      initialRouteName="ItemList"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ItemList" component={ItemListScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AsyncRootScreen" component={AsyncRootScreen} />
      <Stack.Screen name="ProfileScreens" component={ProfileScreens} />
      <Stack.Screen name="MinorApp" component={MicroStackApplication} />
    </Stack.Navigator>
  );
};

export default CustomStackNaviagtor;
