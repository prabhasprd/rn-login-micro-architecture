import 'react-native-gesture-handler';
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginAuthScreen from '../../screens/LoginAuthScreen';
import AsyncScreenMicroApp from '../../screens/AsyncScreenMicroApp';
import ReduxConfig from '../../screens/ReduxConfig';

const Stack = createNativeStackNavigator();

const CustomMicroStackNaviagtor = () => {
  return (
    <Stack.Navigator
      initialRouteName={'LoginAuthScreen'}
      screenOptions={{headerShown: true}}>
      <Stack.Screen name={`LoginAuthScreen`} component={LoginAuthScreen} />
      <Stack.Screen
        name={`AsyncScreenMicroApp`}
        component={AsyncScreenMicroApp}
      />
      <Stack.Screen name={`ReduxConfig`} component={ReduxConfig} />
    </Stack.Navigator>
  );
};

export default CustomMicroStackNaviagtor;
