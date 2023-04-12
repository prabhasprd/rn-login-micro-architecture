import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import AsyncRootScreen from './screens/AsyncRootScreen';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#D14D72',
        alignSelf: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
      <Text>Root Application</Text>
      <AsyncRootScreen />
    </SafeAreaView>
  );
};

export default App;
