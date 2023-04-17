import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncScreenMicroApp from '../../screens/AsyncScreenMicroApp';
import ReduxConfig from '../../screens/ReduxConfig';
import AppHome from '../../screens/AppHome';
import PassingProps from '../../screens/PassingProps';

const Stack = createNativeStackNavigator();

const CustomMicroStackNaviagtor = () => {
  return (
    <Stack.Navigator
      initialRouteName="AppHome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="AppHome" component={AppHome} />
      <Stack.Screen
        name="AsyncScreenMicroApp"
        component={AsyncScreenMicroApp}
      />
      <Stack.Screen name="PassingProps" component={PassingProps} />
      <Stack.Screen name="ReduxConfig" component={ReduxConfig} />
    </Stack.Navigator>
  );
};

export default CustomMicroStackNaviagtor;
