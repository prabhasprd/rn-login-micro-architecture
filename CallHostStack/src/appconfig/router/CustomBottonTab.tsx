import React, {Suspense} from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomStackNaviagtor from './CustomStackNaviagtor';
import BindingMicroApplication from '../../../micro_services/common_component';
import {
  AsyncMicroApp,
  MicroApplication,
  MicroAppLogin,
  MicroAppStackNavigation,
} from '../../../micro_services';
import store from '../redux/store';
import ItemListScreen from '../../screens/item-list-screen';
import {NavigationContainer} from '@react-navigation/native';
import {Stack} from './CustomStackNaviagtor';

const Tab = createBottomTabNavigator();
const MicroStackApplication = () => {
  return (
    <Suspense fallback={<Text>{'loading App ...'}</Text>}>
      <MicroAppLogin store={store} Stack={Stack} />
    </Suspense>
  );
};
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Host App" component={CustomStackNaviagtor} />
      <Tab.Screen name="Micro App" component={MicroStackApplication} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
