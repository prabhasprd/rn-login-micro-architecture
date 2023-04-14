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
        <Stack.Screen name="AppHome" component={AppHome} />
        <Stack.Screen
          name="AsyncScreenMicroApp"
          component={AsyncScreenMicroApp}
        />
        <Stack.Screen name="PassingProps" component={PassingProps} />
        <Stack.Screen name="ReduxConfig">
          {(props: any) => <ReduxConfig {...props} store={store} />}
        </Stack.Screen>
      </Stack.Navigator>
    </Provider>
  );
};

export default LoginAuthScreen;
