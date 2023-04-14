import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import AppHome from './src/screens/AppHome';
import AsyncScreenMicroApp from './src/screens/AsyncScreenMicroApp';
import LoginAuthScreen from './src/screens/LoginAuthScreen';
import ReduxConfig from './src/screens/ReduxConfig';

const App = ({store, Stack}: any) => {
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
      <Stack.Screen name={`AppHome`} component={AppHome} />
    </Stack.Navigator>
  );
};

export default App;
