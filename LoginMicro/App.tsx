import {SafeAreaView, Text} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView
      style={{
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c0c0c0',
        marginTop: 50,
        borderRadius: 5,
      }}>
      <Text>{`Child App screen`}</Text>
    </SafeAreaView>
  );
};

export default App;
