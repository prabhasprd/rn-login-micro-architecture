import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import BindingMicroApplication from './micro_services/common_component';
import {MicroApplication} from './micro_services';

const App = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLogin(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <SafeAreaView>
      <Text>askdjaks</Text>
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
