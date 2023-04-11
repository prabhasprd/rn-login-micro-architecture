import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import BindingMicroApplication from './micro_services/common_component';
import {MicroApplication} from './micro_services';
MicroApplication;

const App = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <SafeAreaView>
      <Text>App Test</Text>
      <TouchableOpacity
        onPress={() => setIsLogin(true)}
        activeOpacity={0.4}
        style={{
          height: 40,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: '#c0c0c0',
          marginTop: 20,
        }}>
        <Text>Switch </Text>
      </TouchableOpacity>
      {isLogin && (
        <BindingMicroApplication
          LoadingContent={'sdhhs ...'}
          children={<MicroApplication />}
        />
      )}
    </SafeAreaView>
  );
};

export default App;
