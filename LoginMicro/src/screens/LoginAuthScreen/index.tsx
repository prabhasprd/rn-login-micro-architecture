import {View, Text} from 'react-native';
import React from 'react';
import AppHome from '../AppHome';
import AsyncScreenMicroApp from '../AsyncScreenMicroApp';
import {Provider} from 'react-redux';
import ReduxConfig from '../ReduxConfig';
import PassingProps from '../PassingProps';

const LoginAuthScreen = (props: any) => {
  const {Stack, store} = props;
  return (
    <Provider store={store}>
      <Stack.Navigator
        initialRouteName="AppHome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="AppHome">
          {(subProps: any) => <AppHome {...subProps} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="AsyncScreenMicroApp">
          {(subProps: any) => <AsyncScreenMicroApp {...subProps} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="PassingProps">
          {(subProps: any) => <PassingProps {...subProps} {...props} />}
        </Stack.Screen>
        <Stack.Screen name="ReduxConfig">
          {(subProps: any) => (
            <ReduxConfig {...subProps} {...props} store={store} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </Provider>
  );
};

export default LoginAuthScreen;
